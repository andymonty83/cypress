// Funciones en Cypress 
// Mejores prácticas

describe('Tests para entender las mejores técnicas a la hora de usar componentes', () => {
      beforeEach(() => {
        // Visitar la página de ejemplo de Cypress
        cy.visit('https://example.cypress.io');
        // Clickar en el botón dropdown para abrir la sección "Querying"
        cy.get(".home-list").eq(0).should("exist").within(() => {
          // Clickar en el botón dropdown para abrir la sección "Querying"
          cy.get('a[href="/commands/querying"]').contains("Querying").should("exist").click();
        })
        // Verificamos que estamos en la URL correcta tras hacer click
        cy.url().should('eq', 'https://example.cypress.io/commands/querying');
      })
      
      it('La peor - Demasiado genérica, sin contexto', () => {
        // Esto puede fallar si hay más de un <button> en la página
        cy.get('button').click()
      })
    
      it('Mala - Acoplada al estilismo, demasiado sujeta a cambios de CSS', () => {
        // Si el equipo de frontend cambia el nombre de las clases, este test fallará
        cy.get('.btn.btn-large').click()
      })
    
      it('Media - Acoplado al atributo `name` que tiene semántica HTML', () => {
        // Atributos HTML semánticos como name son mejores, pero aún pueden cambiar
        cy.get('[name=submission]').click()
      })
    
      it('Ligeramente mejor - Pero todavía acoplado al estilo o a manejadores de eventos', () => {
        cy.get('#main').click()
      })
    
      it('Un poco mejor - Utiliza un ID pero también se asegura de que el elemento tiene un role accesible', () => {
        cy.get('#main[role=button]').click()
      })
    
      it('Mucho mejor. Pero aún acoplado a contenido de texto que puede cambiar', () => {
        // Mejor uso, pero si el texto cambia, este test falla
        cy.contains('Submit').click()
      })
    
      it('La mejor. Aislado de todos los cambios', () => {
        // Ideal: usar atributos personalizados como data-cy/data-test-id es la mejor práctica
        cy.get('[data-cy=submit]').click()
      })
  });