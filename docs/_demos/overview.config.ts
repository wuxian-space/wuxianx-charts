const typesOf: DefineObject<string | string[]> = {
  'ring-three-quarter-comment.vue': ['pie', 'doughnut'],
  'pie-gap-doughnut.vue': ['pie', 'doughnut'],
}

const groupOf: StringObject = {
  'line-simple-configured.vue': 'line-simple',
  'bar-simple-configured.vue': 'bar-simple',
  'bar-stack-configured.vue': 'bar-stack',
  'bar-horizontal-configured.vue': 'bar-horizontal',
  'bar-horizontal-stack-configured.vue': 'bar-horizontal-stack',
  'line-gradient-trend-configured.vue': 'line-gradient-trend',
}

export default {
  typesOf,
  groupOf,
  includes: ['!guide-*.vue'],
}
