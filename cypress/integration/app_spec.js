describe('apple-music-js app', () => {
  it('works', () => {
    cy.visit('/');
    cy.get('[data-test="welcome-closing"]');
    cy.get('body').happoScreenshot({ component: 'Loading screen' });

    cy.get('[data-test="welcome-closing"]').should('not.be.visible');

    cy.get('body').happoScreenshot({ component: 'Main screen' });

    cy.log('**picking an album**')
    cy.contains('Artists').click();

    cy.contains('Coldplay');
    cy.get('body').happoScreenshot({ component: 'Artists screen' });

    cy.contains('Coldplay').click({ force: true });

    cy.get('[data-test="album-button"]').happoScreenshot({
      component: 'Album button',
    });

    cy.contains('A Head Full of Dreams').click();

    cy.get('[data-test="mini-controls"]').happoScreenshot({
      component: 'Mini controls',
      variant: 'no track selected',
    });

    cy.contains('Hymn for the Weekend').click();

    cy.log('**mini player controls**')
    cy.get('[data-test="mini-pause"]').click();

    cy.get('[data-test="mini-controls"]').happoScreenshot({
      component: 'Mini controls',
      variant: 'with track selected',
    });

    cy.get('[data-test="mini-controls"]').click();

    cy.get('[data-test="controls"]').happoScreenshot({
      component: 'Controls',
    });

    cy.log('**large player controls**')
    cy.get('[data-test=play]').click()
    cy.get('[data-test=pause]').should('be.visible')
    cy.get('[data-test="controls"]').happoScreenshot({
      component: 'Controls',
      variant: 'Playing'
    });
    cy.get('[data-test=pause]').click()
    cy.get('[data-test="close-controls"]').click()

  });
});
