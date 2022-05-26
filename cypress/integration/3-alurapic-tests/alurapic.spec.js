
describe('Login e registro de usuarios alurapic', () => {
    beforeEach(() => {
        cy.visit('https://alura-fotos.herokuapp.com');
    });

    it('Verifica mensagens validacao', () => {
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

    it('Verifica mensagem de e-mail inválido', () =>{
        cy.contains('a', 'Register now').click(); 
        cy.get('input[formcontrolname="email"]').type('Francilene');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Invalid e-mail').should('be.visible');
    })

    it('Verifica mensagem de user name "deve ser com letra minúscula"', () =>{
        cy.contains('a', 'Register now').click(); 
        cy.get('input[formcontrolname="email"]').type('fran@gmail.com');
        cy.get('input[formcontrolname="fullName"]').type('Francilene Silva');
        cy.get('input[formcontrolname="userName"]').type('Fran');
        cy.get('input[formcontrolname="password"]').type('123456789');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Must be lower case').should('be.visible');
    })

    it('Verifica mensagem de senha com tamanho mínimo de 8 caracteres', () =>{
        cy.contains('a', 'Register now').click(); 
        cy.get('input[formcontrolname="email"]').type('fran@gmail.com');
        cy.get('input[formcontrolname="fullName"]').type('Francilene Silva');
        cy.get('input[formcontrolname="userName"]').type('fran');
        cy.get('input[formcontrolname="password"]').type('123');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Mininum length is 8').should('be.visible');
    })

    it('Verifica mensagem de senha com tamanho maximo de 18 caracteres', () =>{
        cy.contains('a', 'Register now').click(); 
        cy.get('input[formcontrolname="email"]').type('fran@gmail.com');
        cy.get('input[formcontrolname="fullName"]').type('Francilene Silva');
        cy.get('input[formcontrolname="userName"]').type('fran');
        cy.get('input[formcontrolname="password"]').type('12345678901234567891');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Maximun length is 18').should('be.visible');
    })
});
