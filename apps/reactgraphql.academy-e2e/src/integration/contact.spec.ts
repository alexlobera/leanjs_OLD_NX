describe('reactgraphql.academy: contact', () => {
  beforeEach(() => cy.visit('/'));

  it('should subscribe to the newsletter', () => {
    cy.get('input[name="email"]').type('hello+e2e@leanjs.com');

    cy.findAllByText(/Submit email/).click();

    cy.findAllByText(/Thanks for submitting!/);
  });
});
