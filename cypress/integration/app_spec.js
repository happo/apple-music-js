/// <reference types="cypress" />
describe('apple-music-js app', () => {
  it('can be used to play a song', () => {
    cy.visit('/');

    cy.log('**loading screen**');
    cy.get('[data-test="welcome-closing"]').should('be.visible');
    cy.get('body').happoScreenshot({ component: 'Loading screen' });
    cy.get('[data-test="welcome-closing"]').should('not.be.visible');
    cy.get('body').happoScreenshot({ component: 'Main screen' });

    cy.log('**picking an album**');
    cy.contains('Artists').click();
    cy.contains('Coldplay');
    cy.get('body').happoScreenshot({ component: 'Artists screen' });
    cy.contains('Coldplay').click({ force: true });
    cy.contains('A Head Full of Dreams').click();
    cy.get('[data-test="album-button"]').happoScreenshot({
      component: 'Album button',
    });
    cy.get('[data-test="mini-controls"]').happoScreenshot({
      component: 'Mini controls',
      variant: 'no track selected',
    });

    cy.log('**picking a song**');
    cy.contains('Hymn for the Weekend').click();

    cy.log('**mini player controls**');
    cy.get('[data-test="mini-pause"]').click();
    cy.get('[data-test="mini-controls"]').happoScreenshot({
      component: 'Mini controls',
      variant: 'track selected',
    });
    cy.get('[data-test="mini-controls"]').click();

    cy.log('**large player controls**');
    cy.get('[data-test=play]').click();
    cy.get('[data-test=pause]').should('be.visible');
    cy.get('[data-test=pause]').click();
    cy.get('[data-test="controls"]').happoScreenshot({
      component: 'Large controls',
    });
    cy.get('[data-test="close-controls"]').click();
  });
});
