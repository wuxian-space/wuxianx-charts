# Simple Line Chart

<chart-tags />

## Examples

### Basic Example

::: demo line-simple
<<< @demos/line-simple.vue
:::

### Configured Example

::: demo line-simple-configured
<<< @demos/line-simple-configured.vue
:::

## Parameter Descriptions

| Index | Type                    | Required | Default Value              | Description                      |
| :---: | ----------------------- | :------: | -------------------------- | -------------------------------- |
|   0   | lineSimple              |   Yes    | -                          | -                                |
|   1   | [Data](#data)           |   Yes    | -                          | Data                             |
|   2   | [Options](#options-1)   |    No    | [defaultOptions](#options) | Configuration Parameters         |
|   3   | [EcOptions](#ecoptions) |    No    | -                          | ECharts Configuration Parameters |

## Default Parameter Values

### options
<<< @@/charts/line-simple.ts#Default-Options

## Parameter Types

### Data
<<< @@/charts/line-simple.ts#Type-Data

### Options
<<< @@/charts/line-simple.ts#Type-Options

### EcOptions
<<< @@/charts/line-simple.ts#Type-EcOptions
