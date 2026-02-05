describe('Validación de Documentación de Pruebas', () => {
  it('Debería navegar al documento de Google Drive', () => {
    // 1. Visitar la página
    cy.visit('https://homebanking-demo-tests.netlify.app/');

    // 2. Localizar el botón de forma flexible
    // Usamos 'match' para que ignore mayúsculas/minúsculas y espacios extra
    cy.contains('a', /Plan de Pruebas/i)
        .should('be.visible')
        .and('have.attr', 'href')
        .and('include', '1mw2tHUOUtaQeuTKEvuixQkx5sPYfQTgVr5d5Hxb17q8');
 
      });
  });