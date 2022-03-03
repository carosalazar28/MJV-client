describe('My First Test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('Does not do much!', () => {
    expect(true).to.equal(true);
  });

  it('Should be sign in into app', () => {
    cy.get('[data-cy=email]').type('test@test.com');
    cy.get('#password').type('12345678');
    cy.get('.sc-dlfnbm').click();

    cy.get('h1').should('be.visible');
  });
});
