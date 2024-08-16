const typesOf: DefineObject<string | string[]> = {
  'ring-three-quarter-comment.vue': ['pie', 'doughnut'],
  'pie-gap-doughnut.vue': ['pie', 'doughnut'],
}

const groupOf: StringObject = {
  'line-simple-configured.vue': 'line-simple',
  'bar-simple-configured.vue': 'bar-simple',
  'bar-horizontal-configured.vue': 'bar-horizontal',
}

export default {
  typesOf,
  groupOf,
  includes: ['!guide-*.vue'],
}
