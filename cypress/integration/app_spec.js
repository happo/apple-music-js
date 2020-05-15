describe('apple-music-js app', () => {
  it('works', () => {
    cy.visit('/');
    cy.contains('Artists').click();
    cy.contains('Coldplay').click({ force: true });
    cy.contains('A Head Full of Dreams').click();
    cy.contains('Hymn for the Weekend').click();

    cy.get('[data-test="mini-pause"]').click();

    cy.get('[data-test="mini-controls"]').click();
  });
});
