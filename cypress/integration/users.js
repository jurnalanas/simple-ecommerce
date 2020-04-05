describe('anonymous users', () => {
  it('can login via social media button', () => {
    cy
      .visit('http://localhost:3000')
      .get('.bg-blue-500')
      .click()
      .get(':nth-child(1) > .text-gray-800')
      .should('have.text', 'Home')
  })
})
