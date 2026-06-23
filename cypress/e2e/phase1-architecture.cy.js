describe('Phase 1: Architecture Observation', () => {
  it('loads the kitchen sink and executes in-browser', () => {
    // 1. Visit a live application
    cy.visit('https://example.cypress.io')

    // 2. Cypress automatically waits for elements to appear
    cy.contains('type').click()

    // 3. Observe the URL change to /commands/actions
    cy.url().should('include', '/commands/actions')

    // 4. Interact with the DOM directly
    cy.get('.action-email')
      .type('test@example.com')
      .should('have.value', 'test@example.com')
  })
})