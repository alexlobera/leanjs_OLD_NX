import { getGreeting } from '../support/app.po';

describe('online.reactgraphql.academy', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome');
  });
});
