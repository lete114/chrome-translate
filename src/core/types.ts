export interface ITextNodeInfo {
  node: HTMLElement
  text: string
  parent: HTMLElement | null
  originalText: string
  id: string
}

export interface ITextNodesByParagraph {
  id: string
  container: HTMLElement
  textNodes: {
    node: HTMLElement
    text: string
    parent: HTMLElement | null
    originalText: string
    id: string
  }[]
  combinedText: string
  priority: number
}

export interface IStructuredText {
  text: string
  structure: never[]
  textNodes: {
    node: Node
    text: string
    originalText: string | null
  }[]
}
