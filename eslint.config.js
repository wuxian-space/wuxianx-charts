import antfu from '@antfu/eslint-config'

export default antfu({
  ignores: [
    '.github',
    '.vscode',
    'node_modules',
  ],
})
