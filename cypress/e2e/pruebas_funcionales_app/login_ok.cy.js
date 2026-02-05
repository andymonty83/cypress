
describe('Pruebas de Login - Cuenta Bloqueada', () => {
  it('Debería mostrar mensaje de bloqueo al usar credenciales "locked"', () => {
    // 1. Visitar la aplicación y verifica que es la pantalla de inicio
    cy.visit('https://homebanking-demo-tests.netlify.app/');
    cy.contains('h1', 'HOME BANKING').should('be.visible');

    // 2. Ingresar el usuario
    cy.get('#username').type('demo');

    // 3. Ingresar la contraseña
    cy.get('#password').type('demo123');

    // 4. Hacer clic en el botón de ingresar
    // Usamos cy.contains para buscar el botón por su texto
    cy.contains('button', 'Ingresar').click();

    // Mensaje de acceso - aparece y desaparece
    cy.contains('Inicio de sesión exitoso').should('be.visible');
    cy.contains('Inicio de sesión exitoso', { timeout: 5000 }).should('not.exist');

    // 5. Verificar que estamos en el dashboard
    cy.contains('h2', 'Panel Principal').should('be.visible');

    // 6. Logout del usuario
    cy.contains('button', 'Salir').click();
    cy.contains('button', 'Cancelar').click();
    cy.contains('button', 'Salir').click();
    cy.contains('button', 'Confirmar').click();
    cy.contains('h1', 'HOME BANKING').should('be.visible');

  });
});