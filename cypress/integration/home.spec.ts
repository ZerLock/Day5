describe('Good front for Home', () => {
    it('Go to home view', () => {
        cy.visit('http://localhost:3000');
        cy.wait(1000);
    });

    it('Good title', () => {
        cy.get('#home-title').should('contain', 'Artists Book');
    });

    it('Good subtitle', () => {
        cy.get('#home-subtitle').should('contain', 'Manage your favorite artists');
    });

    it('Good name for register button', () => {
        cy.get('#home-register-button').should('contain', 'Register');
    });

    it('Good name for login button', () => {
        cy.get('#home-login-button').should('contain', 'Login');
    });
});

describe('Click on register button', () => {
    it('Go to home view', () => {
        cy.visit('http://localhost:3000');
        cy.wait(1000);
    });

    it('Click on register button', () => {
        cy.get('#home-register-button').click().url().should('eq', 'http://localhost:3000/register');
    });
});

describe('Click on login button', () => {
    it('Go to home view', () => {
        cy.visit('http://localhost:3000');
        cy.wait(1000);
    });

    it('Click on login button', () => {
        cy.get('#home-login-button').click().url().should('eq', 'http://localhost:3000/login');
    });
});