// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { Icon } from '@iconify/vue'
import Logo from './components/Logo.vue'
import './style.css'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      'nav-bar-title-before': () => h(Logo)
    })
  },
  enhanceApp({ app, router, siteData }) {
    // Register Iconify globally
    app.component('Icon', Icon)
  }
} satisfies Theme
