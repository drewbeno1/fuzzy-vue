<script setup lang="ts">
import { ref, inject, computed, watchEffect } from 'vue'
import { useFuseSearch } from './fuseSearch'
import { useKeyboardShortcut } from './useKeyboardShortcut'
import { useRouter } from 'vue-router'

const spotlightOptions = inject<any>('spotlightOptions')
const router = useRouter()

const open = ref(false)
useKeyboardShortcut('meta+k', () => (open.value = !open.value))

const query = ref('')
const { results, search } = useFuseSearch()

watchEffect(() => {
  if (query.value) search(query.value)
})

function select(item: any) {
  const path = spotlightOptions?.routeMap?.[item.__type]?.(item)
  if (path) router.push(path)
  open.value = false
}
</script>

<template>
  <div v-if="open" class="spotlight-modal">
    <input v-model="query" placeholder="Search..." class="input" />
    <ul>
      <li v-for="result in results" :key="result.id" @click="select(result)">
        {{ result.label }}
      </li>
    </ul>
  </div>
</template>


<style scoped src="./styles.css" />

