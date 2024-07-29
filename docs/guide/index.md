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

``` js {2,6:line-numbers}
import { createApp } from 'vue'
import { barSimple, plugin as charts } from '@wuxianx/charts-vue'
import App from './app.vue'

const app = createApp(App)
app.use(charts({ use: { barSimple } }))
app.mount('#app')
```

**Use it in your component.**

::: demo bar-simple
<<< @demos/bar-simple.vue{7,11 vue:line-numbers}
:::

## Reactive chart

Use `v-ec.watch` and pass in a `ref` to achieve basic reactive chart updates.

::: warning
when reassigning, do not use `ec.value = {...}` directly. Please refer to lines 9 and 10.
:::

::: demo guide-watch
<<< @demos/guide-watch.vue{5,8,9,15 vue:line-numbers}
:::
