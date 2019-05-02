describe('Index Page Test', () => {
  it('Visit Index Page', () => {
    cy.visit('/')
    cy.get('header .header-module--logo--2PcjR').should('be.visible')
  })
})
