# 堆叠柱状图

<chart-tags />

## 示例

### 基础示例

::: demo bar-stack

<<< @demos/bar-stack.vue

:::

### 配置过的示例

::: demo bar-stack-configured

<<< @demos/bar-stack-configured.vue

:::

## 参数说明

| 索引  | 类型                    | 必填  | 默认值                     | 说明             |
| :---: | ----------------------- | :---: | -------------------------- | ---------------- |
|   0   | barStack                |  是   | -                          | -                |
|   1   | [Data](#data)           |  是   | -                          | 数据             |
|   2   | [Options](#options-1)   |  否   | [defaultOptions](#options) | 配置参数         |
|   3   | [EcOptions](#ecoptions) |  否   | -                          | ECharts 配置参数 |

## 参数默认值

### options

<<< @@/charts/bar-stack.ts#Default-Options

## 参数类型

### Data
<<< @@/charts/bar-stack.ts#Type-Data

### Options
<<< @@/charts/bar-stack.ts#Type-Options

### EcOptions
<<< @@/charts/bar-stack.ts#Type-EcOptions
