
describe('Login e registro de usuarios alurapic', () => {
    beforeEach(() => {
        cy.visit('https://alura-fotos.herokuapp.com');
    });

    it('verifica mensagens validacao', () => {
        // interagindo com link
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();

        // fazendo um assert
        cy.contains('ap-vmessage', 'Email is required!')
            .should('be.visible');

        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Email is required!')
            .should('be.visible');
            cy.contains('ap-vmessage', 'Full name is required!')
            .should('be.visible');
            cy.contains('ap-vmessage', 'User name is required!')
            .should('be.visible');
            cy.contains('ap-vmessage', 'Password is required!')
            .should('be.visible');


    })

});
