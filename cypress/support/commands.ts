// put e2e + CT common commands here

import 'cypress-watch-and-reload/support'

Cypress.Commands.add('getByCy', (selector, ...args) =>
  cy.get(`[data-cy="${selector}"]`, ...args),
)

Cypress.Commands.add('getByCyLike', (selector, ...args) =>
  cy.get(`[data-cy*=${selector}]`, ...args),
)

Cypress.Commands.add('getByClassLike', (selector, ...args) =>
  cy.get(`[class*=${selector}]`, ...args),
)
