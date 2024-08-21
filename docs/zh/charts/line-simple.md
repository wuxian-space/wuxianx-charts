# 基础折线图

<chart-tags />

## 示例

### 基础示例

::: demo line-simple
<<< @demos/line-simple.vue
:::

### 配置过的示例

::: demo line-simple-configured
<<< @demos/line-simple-configured.vue
:::

## 参数说明

| 索引  | 类型                    | 必填  | 默认值                     | 说明             |
| :---: | ----------------------- | :---: | -------------------------- | ---------------- |
|   0   | lineSimple              |  是   | -                          | -                |
|   1   | [Data](#data)           |  是   | -                          | 数据             |
|   2   | [Options](#options-1)   |  否   | [defaultOptions](#options) | 配置参数         |
|   3   | [EcOptions](#ecoptions) |  否   | -                          | ECharts 配置参数 |

## 参数默认值

### options
<<< @@/charts/line-simple.ts#Default-Options

## 参数类型

### Data
<<< @@/charts/line-simple.ts#Type-Data

### Options
<<< @@/charts/line-simple.ts#Type-Options

### EcOptions
<<< @@/charts/line-simple.ts#Type-EcOptions
