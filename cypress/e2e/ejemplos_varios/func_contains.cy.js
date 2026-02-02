// Funciones en Cypress 
// cy.contains()

describe('Tests para usar cy.contains()', () => {
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

    it('Encontrar elementos por su contenido usando la palabra "bananas"', () => {
      // Buscamos dentro de la lista con clase .query-list un elemento que contenga "bananas"
      // y comprobamos que ese elemento tenga la clase .third
      cy.get('.query-list')
        .contains('bananas')
        .should('have.class', 'third');
    });
  
    it('Encontrar elementos por su contenido usando una expresión regular', () => {
      // Aquí usamos una expresión regular que coincida con palabras que empiezan por 'b'
      // En este caso encontrará "bananas" igual que el test anterior
      cy.get('.query-list')
        .contains(/^a\w+/)
        .should('have.class', 'first');
    });
  
    it('Encontrar elementos por su contenido usando la palabra apples', () => {
      // Similar a los anteriores pero esta vez buscamos la palabra "apples"
      // y validamos que el elemento tenga la clase .first
      cy.get('.query-list')
        .contains('apples')
        .should('have.class', 'first');
    });
  
    it('Especificar el elemento que nos tiene que devolver Cypress con .contains()', () => {
      // Aquí usamos la forma extendida de .contains(selector, texto)
      // para indicarle a Cypress que queremos un <ul> que contenga el texto "oranges"
      cy.get('#querying')
        .contains('ul', "oranges")
        .should('have.class', 'query-list');
    });
  
    it('Comprobar existencia de un atributo como la clase con contains', () => {
      // Dentro del contenedor con clase .query-button, buscamos el botón con texto "Save Form"
      // y comprobamos que tenga la clase CSS .btn
      cy.get('.query-button')
        .contains('Save Form')
        .should('have.class', 'btn-default');
    });
  });