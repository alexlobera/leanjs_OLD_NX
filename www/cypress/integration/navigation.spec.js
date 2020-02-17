describe('Navigation', function() {
  it("clicking '1-week bootcamp' navigates to a correct url", function() {
    cy.visit('/react/training/')

    cy.contains('React Courses').click()

    cy.url().should('include', '/react/training/')
  })
})
