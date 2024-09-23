import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [vue()],
// })

// เพื่อแก้ปัญหา Failed to resolve component
// How to ignore custom components
// https://dev.to/greggcbs/vue-3-and-vite-ignore-custom-components-code-example-24nn
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          // treat all tags with a dash as custom elements
          isCustomElement: (tag) => ['v-list-item-content', 'v-list-item-icon', 'v-list-item-group'].includes(tag)
        }
      }
    })
  ]
})
