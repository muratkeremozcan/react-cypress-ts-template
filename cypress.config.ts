import {defineConfig} from 'cypress'
import plugins from './cypress/support/plugins'
import tasks from './cypress/support/tasks'

export default defineConfig({
  // @ts-expect-error - experimentalSingleTabRunMode is not in the type definition
  experimentalSingleTabRunMode: true,
  retries: {
    runMode: 2,
    openMode: 0,
  },
  e2e: {
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    baseUrl: 'http://localhost:3000',
    setupNodeEvents(on, config) {
      tasks(on)
      return plugins(on, config)
    },
  },

  component: {
    experimentalJustInTimeCompile: true,
    specPattern: 'src/**/*.cy.{js,jsx,ts,tsx}',
    devServer: {
      framework: 'create-react-app',
      bundler: 'webpack',
      webpackConfig: {
        // workaround to react scripts 5 issue https://github.com/cypress-io/cypress/issues/22762#issuecomment-1185677066
        devServer: {
          port: 3001,
        },
      },
    },
  },
})
