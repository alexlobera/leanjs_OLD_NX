describe('Navigation', function() {
  it("clicking '1-week bootcamp' navigates to a correct url", function() {
    cy.visit('/react/training/')

    cy.contains('React Bootcamp').click()

    cy.url().should('include', '/react/training/bootcamp')
  })
})
