describe('reactgraphql.academy: contact', () => {
  beforeEach(() => cy.visit('/'));

  it('should validate the checkout form and show error messages if it is not valid', () => {
    cy.findAllByText(/Prices & more details/)
      .first()
      .click({ force: true });
    cy.findAllByText(/Buy now/, { timeout: 15000 }).click();

    cy.get('input[name="email"]').first().type('hello+e2e@leanjs.com');
    cy.get('input[name="name"]').first().type('Alex');
    cy.get('input[name="CCname"]').type('Fake CCname');
    // cy.get('input[name="CCnumber"]').type('4242 4242 4242 4242');
    cy.get('input[name="CCexpiry"]').type('12 30');
    cy.get('input[name="CCcvc"]').type('123');

    cy.findAllByText(/Place Order/).click();

    cy.findAllByText(/Required/).should('exist');
    cy.findAllByText(/Please fix the errors above/).should('exist');
  });
});
