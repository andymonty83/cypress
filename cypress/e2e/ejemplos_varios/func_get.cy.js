// Funciones en Cypress 
// cy.get() 
// commemnts free

describe('Tests para usar cy.get()', () => {
    beforeEach(() => {
      // Visitar la página de ejemplo de Cypress: se ejecuta antes de cada bloque
      cy.visit('https://example.cypress.io'); 
      cy.get(".home-list").eq(0).should("exist").within(() => {
        // Clickar en el botón dropdown para abrir la sección "Querying"
        cy.get('a[href="/commands/querying"]').contains("Querying").should("exist").click();
      })
      // Verificamos que estamos en la URL correcta tras hacer click
      cy.url().should('eq', 'https://example.cypress.io/commands/querying');
    })

    it('Clickar en el botón de la página de ejemplo de Cypress mediante identificador', () => {
      // Usamos el selector por ID (único en la página)
      cy.get('#query-btn').should('contain', 'Button').should("exist").click();
    })
  
    it('Clickar en el botón de la página de ejemplo de Cypress mediante nombre de la clase', () => {
      // Selector por clase CSS (puede haber más de uno, pero aquí hay solo uno con esta clase)
      cy.get('.query-btn').should('contain', 'Button').should("exist").click();
    })
  
    it('Clickar en el botón de la página de ejemplo de Cypress mediante selectores compuestos', () => {
      // Selector jerárquico combinando ID + clase + pseudo-selectores (más específico)
      cy.get('#querying .well>button:first').should('contain', 'Button').should("exist").click();
    })
  
    it('Encontrar etiqueta por atributo data-test-id y comprobar clase', () => {
      // Buena práctica: usar atributos personalizados como data-test-id para seleccionar elementos
      cy.get('[data-test-id="test-example"]').should('have.class', 'example')
    })
  
    it('Comprobar atributo data-test-id mediante invocación', () => {
      // .invoke() nos permite acceder directamente a propiedades del DOM como atributos
      cy.get('#querying .well').eq(1)
        .invoke('attr', 'class').should(($component) => {
          expect($component).to.contain('well-1-line')
        })
        // Cypress .contains() 
        // Jest expect($component).to.contain('well-1-line') 
        .should('equal', 'well well-1-line')
    })
  
    it('Comprobar propiedad CSS de un componente por invocación', () => {
      // Aquí accedemos a una propiedad de estilo CSS usando .invoke('css', ...)
      cy.get('[data-test-id="test-example"]')
        .invoke('css', 'position')
        .should('equal', 'static')
    })
  
    it('Anidar comprobaciones en una misma cadena de cy.get', () => {
      // Podemos encadenar múltiples assertions con .should() y .and()
      cy.get('[data-test-id="test-example"]')
        .should('have.attr', 'data-test-id', 'test-example')
        .and('have.css', 'position', 'static')
    })
});