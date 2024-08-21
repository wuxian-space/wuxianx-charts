# Area Chart (Trend Chart)

<chart-tags />

## Examples

### Basic Example

::: demo line-gradient-trend
<<< @demos/line-gradient-trend.vue
:::

### Configured Example

::: demo line-gradient-trend-configured
<<< @demos/line-gradient-trend-configured.vue
:::

## Parameter Descriptions

| Index | Type                    | Required | Default Value              | Description                      |
| :---: | ----------------------- | :------: | -------------------------- | -------------------------------- |
|   0   | lineGradientTrend       |   Yes    | -                          | -                                |
|   1   | [Data](#data)           |   Yes    | -                          | Data                             |
|   2   | [Options](#options-1)   |    No    | [defaultOptions](#options) | Configuration Parameters         |
|   3   | [EcOptions](#ecoptions) |    No    | -                          | ECharts Configuration Parameters |

## Default Parameter Values

### options
<<< @@/charts/line-gradient-trend.ts#Default-Options

## Parameter Types

### Data
<<< @@/charts/line-gradient-trend.ts#Type-Data

### Options
<<< @@/charts/line-gradient-trend.ts#Type-Options

### EcOptions
<<< @@/charts/line-gradient-trend.ts#Type-EcOptions
