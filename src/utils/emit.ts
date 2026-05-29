export function emitCtEvent(host: EventTarget, name: string, detail: unknown): void {
  host.dispatchEvent(new CustomEvent(name, {
    detail,
    bubbles: true,
    composed: true,
  }))
}
