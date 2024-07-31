# Guide

## Installation

::: code-group
```bash [PNPM]
$ pnpm add @wuxianx/charts-vue echarts
```

```bash [NPM]
$ npm install @wuxianx/charts-vue echarts
```

```bash [Yarn]
$ yarn add @wuxianx/charts-vue echarts
```
:::

## Usage

**Add it to your Vue project.**

``` js {2,3,7:line-numbers}
import { createApp } from 'vue'
import * as echarts from 'echarts'
import { barSimple, radarRainbow, plugin as wuxianxCharts } from '@wuxianx/charts-vue'
import App from './app.vue'

const app = createApp(App)
app.use(wuxianxCharts({ use: { barSimple, radarRainbow }, ec: echarts }))
app.mount('#app')
```

**Use it in your component.**

::: demo line-simple
<<< @demos/line-simple.vue{6-9,13 vue:line-numbers}
:::

## Reactive chart

Use `v-ec.watch` and pass in a `ref` to achieve basic reactive chart updates.

::: warning
when reassigning, do not use `ec.value = {...}` directly. Please refer to lines 9 and 10.
:::

::: demo guide-watch
<<< @demos/guide-watch.vue{5,8,9,15 vue:line-numbers}
:::

## ECharts Instance

If you need to obtain the **echarts instance**, you can use the `echarts.getInstanceByDom` method. Please refer to the following example:

::: demo guide-ec-instance
<<< @demos/guide-ec-instance.vue{5-9,11,14,15,34 vue:line-numbers}
:::
