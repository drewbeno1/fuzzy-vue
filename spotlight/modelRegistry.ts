import { SpotlightModel } from './types'

const modelRegistry: SpotlightModel[] = []

export function registerModel(model: SpotlightModel) {
  modelRegistry.push(model)
}

export async function getRegisteredModels(): Promise<SpotlightModel[]> {
  for (const m of modelRegistry) {
    if (!m.data) {
      const res: any = await m.fetch()
      m.data = m.extract(res)
    }
  }
  return modelRegistry
}
