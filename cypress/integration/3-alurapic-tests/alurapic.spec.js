
describe('Usabilidade tela inicial', () => {
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
    });

    it('Verifica mensagens tela inicial', ()=>{
        cy.contains('ap-vmessage', 'User name is required!').should('be.visible');
        cy.contains('ap-vmessage', 'Password is required!').should('be.visible');
        cy.get('button[type="submit"]').should('be.disabled');
           
    });

    it('Verifica botão habilitado na tela inicial', ()=>{
        cy.get('input[formcontrolname="userName"]').type('francilene');
        cy.get('input[formcontrolname="password"]').type('123');
        cy.get('button[type="submit"]').should('be.enabled');
           
    });

    it('Verifica nome da aplicação na tela inicial', ()=>{
        cy.contains('a', ' ALURAPIC ').should('be.visible');        
    });

    it('Verifica menu clicável na tela inicial', ()=>{
        cy.get('.navbar-brand > .fa').click();
        cy.get('.menu-bar > .fa').should('be.visible');
    });
    
    
});
