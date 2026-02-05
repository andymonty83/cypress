
describe('Pruebas de Login - Cuenta Bloqueada', () => {
  it('Debería mostrar mensaje de bloqueo al usar credenciales "locked"', () => {
    // 1. Visitar la aplicación y verifica que es la pantalla de inicio
    cy.visit('https://homebanking-demo-tests.netlify.app/');
    cy.contains('h1', 'HOME BANKING').should('be.visible');

    // 2. Ingresar el usuario
    // Nota: He usado selectores comunes [name="..."] o el placeholder. 
    // Si la app usa ID, puedes cambiarlo por #user o similar.
    cy.get('#username').type('locked');

    // 3. Ingresar la contraseña
    cy.get('#password').type('locked');

    // 4. Hacer clic en el botón de ingresar
    // Usamos cy.contains para buscar el botón por su texto
    cy.contains('button', 'Ingresar').click();

    // 5. Verificar que el mensaje de bloqueo aparece y es visible
    cy.contains('Tu cuenta ha sido bloqueada temporalmente. Contacta con soporte.')
      .should('be.visible')
      //.and('have.css', 'color', 'rgb(46, 184, 113)');
  });
});