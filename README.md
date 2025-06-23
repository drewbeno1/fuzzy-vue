# 👨🏻‍🦯 Fuzzy Vue 🤠
__________________

### Spotlight Style Fuzzy Finder for your Vue Web Apps
Search through your app for whatever data you'd like at the click of whatever shortcut you'd like to set up. 

Example Here


## Get Started 
1. Install Needed Dependencies to your project: 
    ```fuse.js```
2. Download this repo and add it to your project wherever you'd like.
3. Import it into your main.ts or js from wherever you placed it. ex:
    ```import SpotlightPlugin from '@/plugins/spotlight'```
4. Configure your route mapping in main.ts. ex: 
    ```
    app
      .use(head)
      .use(router)
      .use(SpotlightPlugin, {
        routeMap: {
          quote: (q) => `/quotes/${q.id}`,
          order: (o) => `/orders/${o.id}`,
        },
      })
      .mount('#app');
    ```
5. Register your moodels in your main.ts. ex: 
    ```
    ...
    import { registerModel } from '@/plugins/spotlight/modelRegistry'
    import App from './App.vue';
    
    registerModel({
      name: 'quote',
      fetch: () => client.query({
        query: gql`query { quotes { id name } }`
      }),
      extract: (res) => res.data.quotes.map(q => ({
        ...q,
        label: `Quote: ${q.name}`,
      })),
    })
    
    const app = createApp({
      setup () {
    ...
    ```
6. Mount your SpotlightModal.vue in your App.vue. ex:
    ```
    <script setup lang="ts">
      import { useRoute } from 'vue-router';
    
      const route = useRoute();
    
      import MainLayout from './layouts/MainLayout.vue';
      import PublicLayout from './layouts/PublicLayout.vue';
      import SpotlightModal from './plugins/spotlight/SpotlightModal.vue';
    </script>
    
    <template>
      <SpotlightModal />
      <PublicLayout v-if="route.path.startsWith('/public')" />
      <MainLayout v-else />
    </template>
    ```




