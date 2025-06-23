import Fuse from 'fuse.js'
import { ref } from 'vue'
import { getRegisteredModels } from './modelRegistry'
import { SpotlightItem } from './types'

const results = ref<SpotlightItem[]>([])

export function useFuseSearch() {
  let fuse: Fuse<SpotlightItem>

  async function search(query: string) {
    const models = await getRegisteredModels()
    const allData = models.flatMap(model =>
      model.data!.map(item => ({ ...item, __type: model.name }))
    )

    fuse = new Fuse(allData, {
      keys: ['name', 'label', 'reference'],
      threshold: 0.3,
    })

    results.value = fuse.search(query).map(r => r.item)
  }

  return { results, search }
}
