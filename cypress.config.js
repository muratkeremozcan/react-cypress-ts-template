const {defineConfig} = require('cypress')
const codeCoverageTask = require('@bahmutov/cypress-code-coverage/plugin')

module.exports = defineConfig({
  retries: {
    runMode: 2,
    openMode: 0,
  },
  e2e: {
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    baseUrl: 'http://localhost:3000',
    setupNodeEvents(on, config) {
      return Object.assign({}, config, codeCoverageTask(on, config))
    },
  },

  component: {
    devServer: {
      framework: 'create-react-app',
      bundler: 'webpack',
      webpackConfig: {
        // workaround to react-scripts 5 issue https://github.com/cypress-io/cypress/issues/22762
        devServer: {
          port: 3001,
        },
        mode: 'development',
        devtool: false,
        module: {
          rules: [
            // application and Cypress files are bundled like React components
            // and instrumented using the babel-plugin-istanbul
            {
              test: /\.ts$/,
              exclude: /node_modules/,
              use: {
                loader: 'babel-loader',
                options: {
                  presets: [
                    '@babel/preset-env',
                    '@babel/preset-react',
                    '@babel/preset-typescript',
                  ],
                  plugins: [
                    'istanbul',
                    ['@babel/plugin-transform-typescript', {loose: true}],
                  ],
                },
              },
            },
          ],
        },
      },
    },
    setupNodeEvents(on, config) {
      return Object.assign({}, config, codeCoverageTask(on, config))
    },
    specPattern: 'src/**/**/*.cy.{js,ts,jsx,tsx}',
  },
})
