// Funciones en Cypress 
// cy.root()
// update tests

describe('Tests para usar cy.root()', () => {
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

    it('Obtener el elemento raíz del contexto actual', () => {
      // Si no hay contexto definido, cy.root() devuelve el documento HTML completo
      cy.root().should('match', 'html')
    })
  
    it('Obtener el elemento raíz de un contexto diferente, especificándolo con .within()', () => {
      // Dentro de este bloque, cy.root() se refiere al elemento .query-ul
      cy.get('.query-ul').within(() => {
        cy.root().should('have.class', 'query-ul')
      })
    })
});