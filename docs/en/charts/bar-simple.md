# Simple Bar Chart

<chart-tags />

## Examples

### Basic Example

::: demo bar-simple
<<< @demos/bar-simple.vue
:::

### Configured Example
::: demo bar-simple-configured
<<< @demos/bar-simple-configured.vue
:::

## Parameter Descriptions

| Index | Type                    | Required | Default Value              | Description                      |
| :---: | ----------------------- | :------: | -------------------------- | -------------------------------- |
|   0   | barSimple               |   Yes    | -                          | -                                |
|   1   | [Data](#data)           |   Yes    | -                          | Data                             |
|   2   | [Options](#options-1)   |    No    | [defaultOptions](#options) | Configuration Parameters         |
|   3   | [EcOptions](#ecoptions) |    No    | -                          | ECharts Configuration Parameters |

## Default Parameter Values

### options
<<< @@/charts/bar-simple.ts#Default-Options

## Parameter Types

### Data
<<< @@/charts/bar-simple.ts#Type-Data

### Options
<<< @@/charts/bar-simple.ts#Type-Options

### EcOptions
<<< @@/charts/bar-simple.ts#Type-EcOptions
