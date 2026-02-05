describe('Validación de Documentación Funcional', () => {
  it('Debería navegar al documento de Google Drive', () => {
    // 1. Visitar la página
    cy.visit('https://homebanking-demo-tests.netlify.app/');

    // 2. Localizar el botón de forma flexible
    // Usamos 'match' para que ignore mayúsculas/minúsculas y espacios extra
    cy.contains(/DOC\. FUNCIONAL/i)
      .should('be.visible')
      .then(($el) => {
        // Verificamos si es un enlace (<a>) o si el enlace está en un padre
        const href = $el.closest('a').attr('href');
        
        // En lugar de hacer clic y lidiar con el target="_blank",
        // podemos validar directamente el destino o usar cy.visit
        expect(href).to.include('docs.google.com');
        
        // Si necesitas "entrar" al documento:
        // cy.visit(href); 
      });
  });
});