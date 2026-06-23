describe('Phase 3: Responsive Layout Verification', () => {
  const viewports = ['iphone-x', 'ipad-2', 'macbook-15']

  viewports.forEach((size) => {
    it(`verifies navigation behavior on ${size}`, () => {
      cy.viewport(size)
      
      cy.visit('https://example.cypress.io')
      if (size === 'iphone-x') {
        cy.get('.navbar-toggle').should('be.visible')
        cy.get('#navbar').should('not.be.visible')
      } else {
        cy.get('#navbar').should('be.visible')
        
        cy.get('.navbar-toggle').should('not.be.visible')
      }
    })
  })

  it('allows custom pixel dimensions', () => {
    cy.viewport(299, 800)
    cy.visit('https://example.cypress.io')
    cy.get('.navbar-toggle').should('be.visible')
  })
})