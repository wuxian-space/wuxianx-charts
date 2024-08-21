# 面积图（趋势图）

<chart-tags />

## 示例

### 基础示例

::: demo line-gradient-trend
<<< @demos/line-gradient-trend.vue
:::

### 配置过的示例

::: demo line-gradient-trend-configured
<<< @demos/line-gradient-trend-configured.vue
:::

## 参数说明

| 索引  | 类型                    | 必填  | 默认值                     | 说明             |
| :---: | ----------------------- | :---: | -------------------------- | ---------------- |
|   0   | lineGradientTrend       |  是   | -                          | -                |
|   1   | [Data](#data)           |  是   | -                          | 数据             |
|   2   | [Options](#options-1)   |  否   | [defaultOptions](#options) | 配置参数         |
|   3   | [EcOptions](#ecoptions) |  否   | -                          | ECharts 配置参数 |

## 参数默认值

### options
<<< @@/charts/line-gradient-trend.ts#Default-Options

## 参数类型

### Data
<<< @@/charts/line-gradient-trend.ts#Type-Data

### Options
<<< @@/charts/line-gradient-trend.ts#Type-Options

### EcOptions
<<< @@/charts/line-gradient-trend.ts#Type-EcOptions
