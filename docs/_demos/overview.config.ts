const typesOf: DefineObject<string | string[]> = {
  'ring-three-quarter-comment.vue': ['pie', 'doughnut'],
  'pie-simple-configured.vue': ['pie', 'doughnut'],
}

const groupOf: StringObject = {
  'line-simple-configured.vue': 'line-simple',
  'bar-simple-configured.vue': 'bar-simple',
  'pie-simple-configured.vue': 'pie-simple',
}

export default {
  typesOf,
  groupOf,
  includes: ['!guide-*.vue'],
}
