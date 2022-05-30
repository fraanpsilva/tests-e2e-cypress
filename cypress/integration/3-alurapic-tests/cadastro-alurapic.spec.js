describe('Cadastro de usuarios alurapic', () => {
    
    beforeEach(() => {
        cy.visit('/');
    })

    it('Verifica mensagem de e-mail inválido', () =>{
        cy.contains('a', 'Register now').click(); 
        cy.get('input[formcontrolname="email"]').type('Francilene');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Invalid e-mail').should('be.visible');
    });

    it('Verifica mensagem de user name "deve ser com letra minúscula"', () =>{
        cy.contains('a', 'Register now').click(); 
        cy.registraUsuario('fran@gmail.com', 'Francilene Silva', 'Fran', '12345678');
        cy.contains('ap-vmessage', 'Must be lower case').should('be.visible');
    });

    it('Verifica mensagem de senha com tamanho mínimo de 8 caracteres', () =>{
        cy.contains('a', 'Register now').click(); 
        cy.registraUsuario('fran@gmail.com', 'Francilene Silva', 'Fran', '123');
        cy.contains('ap-vmessage', 'Mininum length is 8').should('be.visible');
    });

    it('Verifica mensagem de senha com tamanho maximo de 18 caracteres', () =>{
        cy.contains('a', 'Register now').click(); 
        cy.registraUsuario('fran@gmail.com', 'Francilene Silva', 'Fran', '12345678901234567891');
        cy.contains('ap-vmessage', 'Maximun length is 18').should('be.visible');
    });

    // utilizando massa de dados - informando onde é pra buscar os dados
    const usuarios = require('../../fixtures/usuarios.json') 
    usuarios.forEach(usuario =>{
       
        it(`Registra novo usuário ${usuario.userName}`, () => {
            cy.contains('a', 'Register now').click();
            cy.contains('button', 'Register').click();
            cy.registraUsuario(usuario.email, usuario.fullName, usuario.userName, usuario.password);
            cy.contains('button', 'Register').click();
        })
    });

})