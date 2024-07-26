# Guide

## Installation

::: code-group

```bash [PNPM]
$ pnpm add @wuxianx/charts-vue
```

```bash [NPM]
$ npm install @wuxianx/charts-vue
```

```bash [Yarn]
$ yarn add @wuxianx/charts-vue
```

:::

## Usage

**Add it to your Vue project.**

``` js {2,6}
// main.ts
import { createApp } from 'vue'
import { barSimple, plugin as charts } from '@wuxianx/charts-vue'
import App from './app.vue'

const app = createApp(App)
app.use(charts({ use: { barSimple } }))
app.mount('#app')
```

**Use it in your component.**

::: demo bar-simple

<<< @/demos/bar-simple.vue{7,11}

:::
