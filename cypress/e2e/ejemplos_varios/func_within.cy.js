// Funciones en Cypress 
// .within()

describe('Tests para usar cy.within()', () => {
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
    
    it.skip('Limitar el alcance de las búsquedas de elementos a un contenedor específico', () => {
      // Al usar .within(), Cypress buscará los elementos solo dentro de .query-form
      cy.get('.query-form').within(() => {
        // Ambos inputs están dentro del formulario, usamos first y last para ser precisos
        cy.get('input:first').should('have.attr', 'placeholder', 'Email')
        cy.get('input:last').should('have.attr', 'placeholder', 'Password')


        // Aquí va a fallar porque dentro de este contexto no hay ningun ul con 'oranges'
        //cy.get('#querying')
        //.contains('ul', "oranges")
        //.should('have.class', 'query-list');
      })
    })
  });