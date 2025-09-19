import { GM_getValue, GM_setValue } from '$'
import { formatSize } from './public'

// Interface for a generic key-value storage system
export interface ICacheStorage<T = any> {
  get: (key: string) => T | undefined // Retrieve a value by key
  set: (key: string, value: T) => void // Store a value by key
  remove: (key: string) => void // Remove a value by key
  clear: () => void // Clear all stored data
  has: (key: string) => boolean // Check if a key exists
  size: () => number // Get the number of stored items
  info: () => {
    totalItems: number
    maxSize: string
    usedSize: string
    freeSize: string
    items: { key: string, freq: number, timestamp: number }[]
  } // Get detailed information about the current cache state
}

// Structure of each cache entry stored in the cache
export interface CacheItem<T> {
  value: T // The actual cached value
  freq: number // Usage frequency count (for LFU logic)
  timestamp: number // Timestamp of last usage (for tie-breaking)
}

// Least Frequently Used (LFU) Cache implementation using GM_* storage
export class LFUCache<T = any> implements ICacheStorage<T> {
  #cache: Map<string, CacheItem<T>> // Internal cache map
  #storageKey: string // Key used to save/load from GM storage
  #maxSizeBytes: number // Maximum allowed cache size in bytes

  /**
   * Constructor to initialize the LFU cache.
   * @param storageKey - key for GM storage (default 'lfu_cache')
   * @param maxSizeKB - max cache size in KB (default 512KB = 0.5MB)
   */
  constructor(storageKey: string = 'lfu_cache', maxSizeKB: number = 512) {
    this.#storageKey = storageKey
    this.#maxSizeBytes = maxSizeKB * 1024
    this.#cache = new Map()
    this.#load()
  }

  /**
   * Load the cached data from GM storage into the internal Map.
   * If loading fails, clear the cache.
   */
  #load(): void {
    const raw = GM_getValue(this.#storageKey, {})
    try {
      for (const [key, item] of Object.entries(raw)) {
        this.#cache.set(key, item as CacheItem<T>)
      }
    }
    catch (e) {
      console.warn('[LFUCache] Load failed:', e)
      this.#cache.clear()
    }
  }

  /**
   * Save the current cache state to GM storage.
   */
  #save(): void {
    const obj: Record<string, CacheItem<T>> = {}
    for (const [key, item] of this.#cache.entries()) {
      obj[key] = item
    }
    GM_setValue(this.#storageKey, obj)
  }

  /**
   * Calculate the approximate size of the cache data in bytes.
   * Uses JSON serialization and Blob size measurement.
   * @returns Number of bytes used by the cached data
   */
  #getSizeBytes(): number {
    const obj: Record<string, CacheItem<T>> = {}
    for (const [key, item] of this.#cache.entries()) {
      obj[key] = item
    }
    return new Blob([JSON.stringify(obj)]).size
  }

  /**
   * Evict cache entries if current size exceeds max allowed size.
   * Eviction order: least frequently used, and if tied, oldest timestamp first.
   */
  #evictIfNeeded(): void {
    let size = this.#getSizeBytes()
    if (size <= this.#maxSizeBytes) {
      return
    }

    // Sort entries by frequency (ascending) and timestamp (ascending)
    const entries = Array.from(this.#cache.entries())
    entries.sort((a, b) => {
      const A = a[1]
      const B = b[1]
      if (A.freq === B.freq) {
        return A.timestamp - B.timestamp
      }
      return A.freq - B.freq
    })

    // Remove least frequently used entries until size fits
    for (const [key] of entries) {
      if (size <= this.#maxSizeBytes) {
        break
      }
      this.#cache.delete(key)
      size = this.#getSizeBytes()
    }
  }

  /**
   * Get the cached value for the given key.
   * Updates the usage frequency and timestamp.
   * @param key - key to retrieve
   * @returns cached value or undefined if not found
   */
  get(key: string): T | undefined {
    const item = this.#cache.get(key)
    if (!item) {
      return
    }

    // Update frequency and timestamp on access
    item.freq += 1
    item.timestamp = Date.now()
    this.#cache.set(key, item)
    this.#save()
    return item.value
  }

  /**
   * Set or update a cached value for the given key.
   * Increments frequency if key exists, else initializes frequency to 1.
   * Performs eviction if cache size limit exceeded.
   * @param key - key to set
   * @param value - value to cache
   */
  set(key: string, value: T): void {
    const existing = this.#cache.get(key)
    const item: CacheItem<T> = {
      value,
      freq: existing ? existing.freq + 1 : 1,
      timestamp: Date.now(),
    }
    this.#cache.set(key, item)
    this.#evictIfNeeded()
    this.#save()
  }

  /**
   * Clear the entire cache and remove all saved data.
   */
  clear(): void {
    this.#cache.clear()
    GM_setValue(this.#storageKey, {})
  }

  /**
   * Remove a specific key from the cache.
   * @param key - key to remove
   */
  remove(key: string): void {
    this.#cache.delete(key)
    this.#save()
  }

  /**
   * Check if a key exists in the cache.
   * @param key - key to check
   * @returns true if key exists, false otherwise
   */
  has(key: string): boolean {
    return this.#cache.has(key)
  }

  /**
   * Get the current number of cached entries.
   * @returns number of cache entries
   */
  size(): number {
    return this.#cache.size
  }

  /**
   * Get detailed information about the current cache state.
   */
  info() {
    const usedBytes = this.#getSizeBytes()
    const maxBytes = this.#maxSizeBytes

    const sortedItems = Array.from(this.#cache.entries())
      .sort((a, b) => {
        const A = a[1]
        const B = b[1]
        if (B.freq === A.freq) {
          return B.timestamp - A.timestamp
        }
        return B.freq - A.freq
      })
      .map(([key, item]) => ({
        key,
        freq: item.freq,
        timestamp: item.timestamp,
      }))

    return {
      totalItems: this.#cache.size,
      maxSize: formatSize(maxBytes),
      usedSize: formatSize(usedBytes),
      freeSize: formatSize(maxBytes - usedBytes),
      items: sortedItems,
    }
  }
}
