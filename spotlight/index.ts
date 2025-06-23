import SpotlightModal from './SpotlightModal.vue'
import { App } from 'vue'

export default {
  install(app: App, options: any) {
    app.component('SpotlightModal', SpotlightModal)
    app.provide('spotlightOptions', options)
  },
}
