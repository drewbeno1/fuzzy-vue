export interface SpotlightItem {
  id: string | number
  label: string
  [key: string]: any
}

export interface SpotlightModel {
  name: string
  fetch: () => Promise<any>  // You can improve this with generics later
  extract: (res: any) => SpotlightItem[]
  data?: SpotlightItem[]
}
