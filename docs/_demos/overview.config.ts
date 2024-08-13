const typesOf: DefineObject<string | string[]> = {
  'ring-three-quarter-comment.vue': ['pie', 'doughnut'],
  'pie-gap-doughnut.vue': ['pie', 'doughnut'],
}

const groupOf: StringObject = {
  'line-simple-configured.vue': 'line-simple',
  'bar-simple-configured.vue': 'bar-simple',
}

export default {
  typesOf,
  groupOf,
  includes: ['!guide-*.vue'],
}