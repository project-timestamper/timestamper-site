import html from '@html-eslint/eslint-plugin'
import frontmatter from 'eslint-plugin-frontmatter'

export default [
  // your own configurations.
  {
    plugins: {
      frontmatter
    },
    rules: {
      '@html-eslint/indent': ['error', 2],
      '@html-eslint/no-trailing-spaces': 'error'
    }
  },
  {
    // recommended configuration included in the plugin
    ...html.configs['flat/recommended'],
    files: ['**/*.html']
  }
]
