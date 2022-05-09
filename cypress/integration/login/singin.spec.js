import user from '../../fixtures/user';

describe('Login Test', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Does not do much', () => {
    expect(true).to.equal(true);
  });

  it('Should be sign in into app', () => {
    cy.get('[data-cy=email]').type(user.email);
    cy.get('#password').type(user.password);
    cy.intercept('GET', `${Cypress.env('REACT_APP_SERVER_URL')}/users/`).as(
      'getProfile'
    );
    cy.get('[data-cy=submit]').click();

    cy.wait('@getProfile');
    cy.get('h1').contains('Profile').should('be.visible');
  });
});
