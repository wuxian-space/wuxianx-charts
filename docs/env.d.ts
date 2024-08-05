/// <reference types="vitepress/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'

  // eslint-disable-next-line ts/no-empty-object-type
  const component: DefineComponent<{}, {}, any>
  export default component
}

// window types
interface Window {
  __custom__: {
    chartsMeta: {
      name: string
      version: string
      [key: string]: {
        name: string
        initialVersion: string
        [key: string]: any
      }
    }
    [key: string]: any
  }
}
