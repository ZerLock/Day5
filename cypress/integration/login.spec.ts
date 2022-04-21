describe('Good front for Login', () => {
    it('Go to home view', () => {
        cy.visit('http://localhost:3000/login');
        cy.wait(1000);
    });

    it('Good number of input', () => {
        cy.get('.login-input').should('have.length', 2);
    });

    it('Good name of register button', () => {
        cy.get('#login-button-register').should('contain', 'Register');
    });

    it('Good name of login button', () => {
        cy.get('#login-button-login').should('contain', 'Login');
    });
});

describe('Click on register redirection button', () => {
    it('Go to hove view', () => {
        cy.visit('http://localhost:300/login');
        cy.wait(1000);
    });

    it('Click on register button', () => {
        cy.get('#login-register-button').click().url().should('eq', 'http://localhost:3000/register');
    });
});