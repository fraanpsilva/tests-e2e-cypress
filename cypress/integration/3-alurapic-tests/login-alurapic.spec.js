describe('Login de usuarios alurapic', () => {
    beforeEach(() => {
        cy.visit('https://alura-fotos.herokuapp.com');
        cy.intercept('POST', 'https://apialurapic.herokuapp.com/user/login', {
            statusCode: 400
        }).as('stubPost')
    });

    it('Fazer login com usuário valido', ()=>{
        cy.login(Cypress.env('userName'), Cypress.env('password')); 
        cy.contains('a', '(Logout)').should('be.visible');
    });

    // it.only informa pra rodar apenas os testes que possui
    it('Fazer login com usuário invalido', ()=>{
        cy.login(Cypress.env('userName'), Cypress.env('password'));
        cy.on('window:alert', (str) =>{
            expect(str).to.equal('Invalid user name or password')
        });   
    });

    // simulando um erro
    it('Fazer login com usuário válido com Mocks', ()=>{
        cy.login(Cypress.env('userName'), Cypress.env('password')); 
        cy.wait('@stubPost')
        cy.contains('a', '(Logout)').should('be.visible');
    });
})