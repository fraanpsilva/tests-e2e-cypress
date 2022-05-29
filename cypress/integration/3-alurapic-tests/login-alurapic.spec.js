describe('Login de usuarios alurapic', () => {
    beforeEach(() => {
        cy.visit('https://alura-fotos.herokuapp.com');
    });

    it('Fazer login com usuário valido', ()=>{
        cy.login('flavio', '123');
        cy.contains('a', '(Logout)').should('be.visible');
    });

    // it.only informa pra rodar apenas os testes que possui
    it('Fazer login com usuário invalido', ()=>{
        cy.login('francilene', '1234');
        cy.on('window:alert', (str) =>{
            expect(str).to.equal('Invalid user name or password')
        });
        
    });
})