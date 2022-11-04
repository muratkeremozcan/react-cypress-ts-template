import {defineConfig} from 'cypress'

export default defineConfig({
  // @ts-expect-error - experimental mode is temporary
  experimentalSingleTabRunMode: true,
  retries: {
    runMode: 2,
    openMode: 0,
  },
  e2e: {
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    baseUrl: 'http://localhost:5173',
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setupNodeEvents(_on, _config) {
      // implement node event listeners here
      // and load any plugins that require the Node environment
    },
  },

  component: {
    devServer: {
      framework: 'react',
      bundler: 'vite',
    },
  },
})
