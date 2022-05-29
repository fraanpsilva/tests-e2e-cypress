
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
        cy.registraUsuario('fran@gmail.com', 'Francilene Silva', 'Fran', '12345678');
        cy.contains('ap-vmessage', 'Must be lower case').should('be.visible');
    })

    it('Verifica mensagem de senha com tamanho mínimo de 8 caracteres', () =>{
        cy.contains('a', 'Register now').click(); 
        cy.registraUsuario('fran@gmail.com', 'Francilene Silva', 'Fran', '123');
        cy.contains('ap-vmessage', 'Mininum length is 8').should('be.visible');
    })

    it('Verifica mensagem de senha com tamanho maximo de 18 caracteres', () =>{
        cy.contains('a', 'Register now').click(); 
        cy.registraUsuario('fran@gmail.com', 'Francilene Silva', 'Fran', '12345678901234567891');
        cy.contains('ap-vmessage', 'Maximun length is 18').should('be.visible');
    })

    it('Fazer login com usuário valido', ()=>{
        cy.login('flavio', '123');
        cy.contains('a', '(Logout)').should('be.visible');
    })

    // it.only informa pra rodar apenas os testes que possui
    it('Fazer login com usuário invalido', ()=>{
        cy.login('francilene', '1234');
        cy.on('window:alert', (str) =>{
            expect(str).to.equal('Invalid user name or password')
        })
        
    })

    // utilizando massa de dados - informando onde é pra buscar os dados
    const usuarios = require('../../fixtures/usuarios.json') 
    usuarios.forEach(usuario =>{
       
        it.only(`Registra novo usuário ${usuario.userName}`, () => {
            cy.contains('a', 'Register now').click();
            cy.contains('button', 'Register').click();
            cy.registraUsuario(usuario.email, usuario.fullName, usuario.userName, usuario.password);
            cy.contains('button', 'Register').click();
        })

    })
    
});
