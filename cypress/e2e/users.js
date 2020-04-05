describe('anonymous users', () => {
  it('can login via social media button', () => {
    cy.visit('/')
      .get('.bg-blue-500')
      .click()
      .get(':nth-child(1) > .text-gray-800')
      .should('have.text', 'Home')
  })
  it('can validate login', () => {
    cy.visit('/')
  })
})
