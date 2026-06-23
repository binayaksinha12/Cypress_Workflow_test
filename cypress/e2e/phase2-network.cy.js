describe('Phase 2: Network Interception', () => {
  it('mocks an API response to control the UI state', () => {
    cy.intercept('GET', '**/comments/*', {
      statusCode: 200,
      body: {
        postId: 1,
        id: 1,
        name: "Mocked User",
        email: "mock@example.com",
        body: "This comment is completely injected by Cypress."
      }
    }).as('getComment') 

    cy.visit('https://example.cypress.io/commands/network-requests')
    cy.get('.network-btn').click()
    cy.wait('@getComment')
    cy.get('.network-comment')
      .should('contain', 'This comment is completely injected by Cypress.')
  })
})