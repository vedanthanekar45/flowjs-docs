import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Flow.js",
  description: "Documentation Website for FlowJS",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Getting Started', link: '/getting-started/introduction.md'},
      { text: 'Core Concepts', link: '/core-concepts/3d-work.md'},
      { text: 'Examples', link: '/examples/markdown-examples.md' },
      { 
        text: 'v1.0', 
        items: [
          { text: 'Changelog', link: '/changelog' },
          { text: 'npm', link: 'https://www.npmjs.com/' }
        ]
      }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/examples/markdown-examples.md' },
          { text: 'Runtime API Examples', link: '/examples/api-examples.md' }
        ]
      },
      {
        text: 'Getting Started',
        items: [
          { text: 'Introduction', link: '/getting-started/introduction.md'},
          { text: 'Making Your First Scene', link: '/getting-started/first-scene.md'},
          { text: 'Optimizations', link: '/getting-started/optimizations.md'}
        ]
      },
      {
        text: 'Core Concepts',
        items: [
          { text: 'How Does 3D Work', link: '/core-concepts/3d-work.md'},
          { text: 'Meshes and Vertices', link: '/core-concepts/meshes.md'},
          { text: 'Camera', link: '/core-concepts/camera.md'},
          { text: 'Lighting', link: '/core-concepts/lighting.md'},
          { text: 'Materials and Shaders', link: '/core-concepts/materials.md'},
          { text: 'HDRI and Environments', link: '/core-concepts/hdri.md'},
          { text: 'Renderer', link: '/core-concepts/renderer.md'}
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/AshutoshKhadse23/flow-js' }
    ]
  }
})
