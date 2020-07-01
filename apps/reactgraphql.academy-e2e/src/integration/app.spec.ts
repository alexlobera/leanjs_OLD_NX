import { getGreeting } from '../support/app.po';

describe('reactgraphql.academy', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('React GraphQL Academy');
  });
});
