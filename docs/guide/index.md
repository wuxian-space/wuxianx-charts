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
import { barSimple, lineSimple, radarRainbow, plugin as wuxianxCharts } from '@wuxianx/charts-vue'
import App from './app.vue'

const app = createApp(App)
app.use(wuxianxCharts({ use: { barSimple, lineSimple, radarRainbow }, ec: echarts }))
app.mount('#app')
```

**Use it in your component.**

::: demo bar-simple
<<< @demos/bar-simple.vue
:::

## Reactive chart

Use `v-ec.watch` and pass in a `ref` to achieve basic reactive chart updates.

::: warning
Please note that this solution does not support deep listening and can only assign values by replacing with new data. Please refer to the following example:
:::

::: demo guide-watch
<<< @demos/guide-watch.vue{14,17-24 vue:line-numbers}
:::

## ECharts Instance

If you need to obtain the **echarts instance**, you can use the `echarts.getInstanceByDom` method. Please refer to the following example:

::: demo guide-ec-instance
<<< @demos/guide-ec-instance.vue{11,14,15,34 vue:line-numbers}
:::
