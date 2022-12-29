module.exports = {
  plugins: ['eslint-plugin-cypress'],
  extends: ['react-app', 'plugin:cypress/recommended', 'react-app/jest'],
  rules: {
    'cypress/no-assigning-return-values': 'error',
    'cypress/no-unnecessary-waiting': 'error',
    'cypress/assertion-before-screenshot': 'warn',
    'cypress/no-async-tests': 'error',
    'cypress/no-pause': 'error',
    '@typescript-eslint/no-var-requires': 'off',
  },
  env: {'cypress/globals': true},
}
