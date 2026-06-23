describe('Phase 2: UI Interaction', () => {
  beforeEach(() => {
    cy.visit('https://example.cypress.io/todo')
  })

  it('adds a new todo item', () => {
    const newItem = 'Build a real-world project'

    cy.get('[data-test=new-todo]').type(`${newItem}{enter}`)
    cy.get('.todo-list li')
      .should('have.length', 3)
      .last()
      .should('have.text', newItem)
  })

  it('marks an existing todo as completed', () => {
    cy.contains('Pay electric bill')
      .parent()
      .find('input[type=checkbox]')
      .check()
    cy.contains('Pay electric bill')
      .parents('li')
      .should('have.class', 'completed')
  })
})