import App from './App'
import './index.css'

describe('CT sanity', () => {
  it('passes sanity', () => {
    cy.mount(<App />)
    cy.getByCy('count').contains('count is 0').dblclick().contains('count is 2')
  })
})
