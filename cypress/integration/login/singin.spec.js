import user from '../../fixtures/user';

describe('My First Test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('Does not do much!', () => {
    expect(true).to.equal(true);
  });

  it('Should be sign in into app', () => {
    cy.get('[data-cy=email]').type(user.email);
    cy.get('#password').type(user.password);
    cy.get('.sc-dlfnbm').click();

    cy.get('h1').should('be.visible');
  });
});
