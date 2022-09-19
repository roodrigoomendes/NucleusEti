/// <reference types="cypress" />


describe('CT0001 Cadastro', () => {
    
const EmailInvalido = 'teste.com'
const EmailValido = 'teste@teste.com'
const User = 'teste'

    beforeEach(() => {
        
        cy.visit('http://alura-fotos.herokuapp.com');
    })

    it('001 - Verificando mensagem de Validação',() => {
        //DADO que acesso o formulario de Cadastro   

        cy.contains('a','Register now').click();

        //QUANDO Não preencho nenhum campo
        //E Tento Cadastrar
        cy.contains('button','Register').click();
        

        //ENTAO Mostra mensagens de campos obrigatorios
        cy.contains('ap-vmessage','Email is required!')
        .should('be.visible');
        
        cy.contains('button','Register').click();
        
        cy.contains('ap-vmessage','Full name is required!')
        .should('be.visible');
        
        cy.contains('ap-vmessage','User name is required!')
        .should('be.visible');
        
        cy.contains('ap-vmessage','Password is required!')
        .should('be.visible');
        
    })

    it('002- Verificando Email em formato Invalido',() => {
        
        //DADO que estou no formulario de Cadastro
        cy.contains('a','Register now').click();
        
        //QUANDO Tendo Cadastrar
        cy.contains('button','Register').click();
        
        //E Preencho o campo email sem "@"
        cy.get('input[formcontrolname="email"]').type(EmailInvalido)

        //"ENTAO Mostra mensagem de "Invalid e-mail"
        cy.contains('ap-vmessage','Invalid e-mail')
        .should('be.visible');
    })


    it('003- Verificando mensagens de senha com menos de 8 caracters',() => {
        
        //DADO que estou no formulario de Cadastro
        cy.contains('a','Register now').click();
        
        //QUANDO Preencho o campo E-mail corretamente
        cy.get(':nth-child(1) > .form-control').type(EmailValido)

        //E Preencho o campo Full Name corretamente
        cy.get(':nth-child(2) > .form-control').type(User)

        //E Preencho o campo User corretamente
        cy.get(':nth-child(3) > .form-control').type(User)

        //E Preencho o campo Senha com menos de 8 caracteres
        cy.get('input[formcontrolname="password"]').type('123')

        //E Tento Cadastrar
        cy.contains('button','Register').click();
        
        //ENTAO Mostra mensagem de "Mininum length is 8"
        cy.contains('ap-vmessage','Mininum length is 8')
        .should('be.visible');

        
    })

})
