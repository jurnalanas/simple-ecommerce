describe('anonymous users', () => {
  it('can login via social media button', () => {
    cy.visit('/')
      .get('[data-testid=facebook]')
      .click()
      .get('[data-testid=home]')
      .should('have.text', 'Home')
  })
  it('can validate login', () => {
    cy.visit('/')
  })
})
