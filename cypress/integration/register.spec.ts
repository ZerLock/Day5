describe('Good front for Register', () => {
    it('Go to Register view', () => {
        cy.visit('http://localhost:3000/register');
        cy.wait(1000);
    });

    it('Good number of input', () => {
        cy.get('register-input').should('have.length', 3);
    });

    it('Good name of register button', () => {
        cy.get('#login-button-register').should('contain', 'Register');
    });

    it('Good name of login button', () => {
        cy.get('#login-button-login').should('contain', 'Login');
    });
});