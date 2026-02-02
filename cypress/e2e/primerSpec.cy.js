describe('Probar el header de la web ejemplo de CY', () => {
  it('Clicar en el botón Cypress API', () => {
    cy.visit('https://example.cypress.io');
    cy.get('#navbar > :nth-child(1) > :nth-child(3) > a').should("exist").click();
    cy.url().should('eq', 'https://example.cypress.io/cypress-api')
  })

  // Probar opciones del menú desplegable 

  it('Clicar en el botón Commands - Q', () => {
    cy.visit('https://example.cypress.io');
    cy.get('.dropdown-toggle').should("exist").click();
    cy.get('.dropdown-menu > :nth-child(1) > a').should("exist").click();
    cy.url().should('eq', 'https://example.cypress.io/commands/querying')
  })


  it('Clicar en el botón Commands - T', () => {
    cy.visit('https://example.cypress.io');
    //cy.get('.dropdown-toggle', { timeout: 2000 }).should('be.visible');
    cy.get('.dropdown-toggle').should("exist").click();
    cy.get('.dropdown-menu > :nth-child(2) > a').should("exist").click();
    cy.url().should('eq', 'https://example.cypress.io/commands/traversal')
  })

  it('Clicar en el botón Utilities', () => {
    cy.visit('https://example.cypress.io');
    cy.get('#navbar > :nth-child(1) > :nth-child(2) > a').should("exist").click();
    cy.url().should('eq', 'https://example.cypress.io/utilities')
  })

})

// Probar las cabeceras: 
// Hacemos uso de la función beforeEach
// para ahorrar líneas de código en cada test

describe('Probar el h1 de las páginas', () => {
  beforeEach(() => {
    cy.visit('https://example.cypress.io');
  })

  it('Clicar en el botón Cypress API', () => {
    cy.get('#navbar > :nth-child(1) > :nth-child(3) > a').should("exist").click();
    cy.url().should('eq', 'https://example.cypress.io/cypress-api')
    cy.get('h1').should("exist").contains("Cypress API")
  })

  it('Clicar en el botón Utilities', () => {
    cy.get('#navbar > :nth-child(1) > :nth-child(2) > a').should("exist").click();
    cy.url().should('eq', 'https://example.cypress.io/utilities')
    cy.get('h1').should("exist").contains("Utilities")
  })

  it('Clicar en el botón Commands - Q', () => {
    cy.get('.dropdown-toggle').should("exist").click();
    cy.get('.dropdown-menu > :nth-child(1) > a').should("exist").click();
    cy.url().should('eq', 'https://example.cypress.io/commands/querying')
    cy.get('h1').should("exist").contains("Querying")
  })

   it('Volver a Inicio', () => {
    
  })

})




// Repo de los specs del curso en https://github.com/theqahub/cypress/
// agrupados según estructura funcional de la web Cypress