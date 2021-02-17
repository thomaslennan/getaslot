describe('Register', () => {
  it('Chula Vista', () => {
    cy.wait(10000);
    cy.visit('https://www.sharp.com/health-classes/volunteer-registration-chula-vista-covid-19-vaccine-clinic-2554');
    cy.get('.section-more-info').first().should('have.attr', 'href')
      .then((href) => {
        cy.visit('https://www.sharp.com' + href);
        cy.wait(3000);
        cy.get('#add-to-cart').click({ force: true });
        cy.wait(6000000);
      });
   });
});
