# Stacked Bar Chart

<chart-tags />

## Examples

### Basic Example

::: demo bar-stack

<<< @demos/bar-stack.vue

:::

### Configured Example

::: demo bar-stack-configured

<<< @demos/bar-stack-configured.vue

:::

## Parameter Descriptions

| Index | Type                    | Required | Default Value              | Description                      |
| :---: | ----------------------- | :------: | -------------------------- | -------------------------------- |
|   0   | barStack                |   Yes    | -                          | -                                |
|   1   | [Data](#data)           |   Yes    | -                          | Data                             |
|   2   | [Options](#options-1)   |    No    | [defaultOptions](#options) | Configuration parameters         |
|   3   | [EcOptions](#ecoptions) |    No    | -                          | ECharts configuration parameters |

## Default Parameter Values

### options

<<< @@/charts/bar-stack.ts#Default-Options

## Parameter Types

### Data
<<< @@/charts/bar-stack.ts#Type-Data

### Options
<<< @@/charts/bar-stack.ts#Type-Options

### EcOptions
<<< @@/charts/bar-stack.ts#Type-EcOptions
