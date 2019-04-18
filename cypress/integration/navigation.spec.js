describe('Navigation', function() {
  it("clicking '1-week bootcamp' navigates to a correct url", function() {
    cy.visit('/')

    cy.contains('1-week bootcamp >>').click()

    cy.url().should('include', '/react-redux-graphql-bootcamp/')
  })
})
