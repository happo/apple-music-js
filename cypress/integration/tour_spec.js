/// <reference types="cypress" />
describe('apple-music-js app', () => {
  // a tour of app's features without any visual tests
  it('works', () => {
    cy.visit('/');
    cy.get('[data-test="welcome-closing"]');
    cy.get('[data-test="welcome-closing"]').should('not.be.visible');

    cy.log('**picking an album**')
    cy.contains('Artists').click();
    cy.contains('Coldplay').click({ force: true });
    cy.contains('A Head Full of Dreams').click();
    cy.contains('Hymn for the Weekend').click();

    cy.log('**mini player controls**')
    cy.get('[data-test="mini-pause"]').click();
    cy.get('[data-test="mini-controls"]').click();

    cy.log('**large player controls**')
    cy.get('[data-test=play]').click()
    cy.get('[data-test=pause]').should('be.visible')
    cy.get('[data-test=pause]').click()
    cy.get('[data-test="close-controls"]').click()
  });
});
