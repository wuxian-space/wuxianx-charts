# 指南

## 安装

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

## 使用方法

**添加到 Vue 项目中**

``` js {2,3,7:line-numbers}
import { createApp } from 'vue'
import * as echarts from 'echarts'
import { barSimple, lineSimple, radarRainbow, plugin as wuxianxCharts } from '@wuxianx/charts-vue'
import App from './app.vue'

const app = createApp(App)
app.use(wuxianxCharts({ use: { barSimple, lineSimple, radarRainbow }, ec: echarts }))
app.mount('#app')
```

**在组件中使用**

::: demo bar-simple
<<< @demos/bar-simple.vue
:::

## 响应式图表

使用 `v-ec.watch` 并传入一个 `ref` 来实现基本的响应式图表更新。

::: demo guide-watch
<<< @demos/guide-watch.vue{14,17-24,30 vue:line-numbers}
:::

## 自动调整（resize）

如果希望在发生 `window.resize` 时触发 `chart.resize`，可以使用 `v-ec.resize`。

::: demo guide-resize
<<< @demos/guide-resize.vue{13 vue:line-numbers}
:::

## 获取图表实例

如果需要获取 `echarts` 实例，可以使用 `echarts.getInstanceByDom` 方法。请参考以下示例：

::: demo guide-ec-instance
<<< @demos/guide-ec-instance.vue{11,14,15,35,36 vue:line-numbers}
:::

## Typescript 支持

如果使用 TypeScript，可以使用类型 `WuxianxChartsValue<'barSimple'>` 或函数 `defineChartOptions('barSimple', ...)` 进行类型限制。请参考以下示例：

::: demo guide-typescript
<<< @demos/guide-typescript.vue{14,16 vue:line-numbers}
:::
