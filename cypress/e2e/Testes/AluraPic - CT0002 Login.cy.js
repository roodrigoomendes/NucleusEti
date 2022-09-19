/// <reference types="cypress" />


describe('CT0002 Login', () => {
    
const LoginValido = 'flavio'
const LoginInvalido = 'rodrigo'
const Senha = '123'

    beforeEach(() => {
        //DADO que estou na tela de login
        cy.visit('http://alura-fotos.herokuapp.com');
    })

    it('001 - Fazendo login de usuario valido', () =>{
        
        //QUANDO Preencho o campo usuario valido
        cy.get(':nth-child(1) > .form-control').type(LoginValido)
        
        //E Preencho o campo senha valida
        cy.get(':nth-child(2) > .form-control').type(Senha)
        
        //E Tento acessar aplicação
        cy.get('button[type="submit"]').click();

        //ENTAO Consigo acessar a aplicação
        cy.contains('a','(Logout)').should('be.visible');
    })


    it('002 - Fazendo login de usuario invalido', () =>{
        
        //QUANDO Preencho o campo usuario invalido
        cy.get(':nth-child(1) > .form-control').type(LoginInvalido)
        
        //E Preencho o campo senha invalida
        cy.get(':nth-child(2) > .form-control').type(Senha)
        
        //E Tento acessar aplicação
        cy.get('button[type="submit"]').click();
        
        cy.on ('window:alert', (str) => {
            expect(str).to.equal('Invalid user name or password')
        })
    })
    

})
