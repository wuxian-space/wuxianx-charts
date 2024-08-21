# Rainbow Radar Chart

<chart-tags />

## Examples

### Basic Example

::: demo radar-rainbow
<<< @demos/radar-rainbow.vue
:::

## Parameter Description

| Index | Type                    | Required | Default Value            | Description                   |
| :---: | ----------------------- | :------: | ------------------------ | ----------------------------- |
|   0   | radarRainbow            |   Yes    | -                        | -                             |
|   1   | [Data](#data)           |   Yes    | -                        | Data                          |
|   2   | [Colors](#colors-1)     |    No    | [defaultColors](#colors) | Configuration Parameters      |
|   3   | [EcOptions](#ecoptions) |    No    | -                        | ECharts Configuration Options |

## Default Parameter Values

### Colors
<<< @@/charts/radar-rainbow.ts#Default-Colors

## Parameter Types

### Data
<<< @@/charts/radar-rainbow.ts#Type-Data

### Colors
<<< @@/charts/radar-rainbow.ts#Type-Colors

### EcOptions
<<< @@/charts/radar-rainbow.ts#Type-EcOptions
