# 彩虹雷达图

<chart-tags />

## 示例

### 基础示例

::: demo radar-rainbow
<<< @demos/radar-rainbow.vue
:::

## 参数说明

| 索引  | 类型                    | 必填  | 默认值                   | 说明             |
| :---: | ----------------------- | :---: | ------------------------ | ---------------- |
|   0   | radarRainbow            |  是   | -                        | -                |
|   1   | [Data](#data)           |  是   | -                        | 数据             |
|   2   | [Colors](#colors-1)     |  否   | [defaultColors](#colors) | 配置参数         |
|   3   | [EcOptions](#ecoptions) |  否   | -                        | ECharts 配置参数 |

## 参数默认值

### Colors
<<< @@/charts/radar-rainbow.ts#Default-Colors

## 参数类型

### Data
<<< @@/charts/radar-rainbow.ts#Type-Data

### Colors
<<< @@/charts/radar-rainbow.ts#Type-Colors

### EcOptions
<<< @@/charts/radar-rainbow.ts#Type-EcOptions
