describe('Navigation', function() {
  it("clicking '1-week React bootcamp' navigates to a correct url", function() {
    cy.visit('http://localhost:9000/')

    cy.contains('1-week React bootcamp >>').click()

    cy.url().should('include', '/react-redux-graphql-bootcamp/')
  })
})
