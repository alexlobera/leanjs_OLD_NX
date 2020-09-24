import { getGreeting } from '../support/app.po';

describe('upmentoring', () => {
  beforeEach(() => cy.visit('/login'));

  it('should display welcome message', () => {

    cy.get('label').contains(`Enter your email address and we'll email you a login link:`);
  });
});
