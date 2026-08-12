import Login from '../pages/login'
import Inventory from '../pages/inventory'
import Header from '../pages/header'

describe('Login', () => {
    beforeEach(() => {
        Login.visitarPagina()
    })

    it('Realizar login com sucesso', () => {
        Login.preencherCrendeciaisValidas()
        Inventory.validarAcessoAPagina()
    })

    it('Realizar login com credenciais invalidas', () => {
        Login.preencherCrendeciaisInvalidas()
        Login.validarErroCredenciaisInvalidas()
    })

    it('Realizar login com usuário bloqueado', () => {
        Login.preencherCredenciais('locked_out_user', 'secret_sauce')
        Login.validarErroUsuarioBloqueado()
    })

    it('Validar formulário com username vazio', () => {
        Login.preencherCredenciais('', 'secret_sauce')
        Login.validarErroCampoObrigatorio('Username is required')
    })

    it('Validar formulário com password vazio', () => {
        Login.preencherCredenciais('standard_user', '')
        Login.validarErroCampoObrigatorio('Password is required')
    })

    it('Validar login sem preencher campos', () => {
        Login.preencherCredenciais('', '')
        Login.validarErroCampoObrigatorio('Username is required')
    })

    it('Acesso restrito ao inventário sem autenticação', () => {
        cy.visit('https://www.saucedemo.com/inventory.html', { failOnStatusCode: false })
        cy.url().should('eq', 'https://www.saucedemo.com/')
        Login.validarPaginaLogin()
    })

    it('Realizar logout com sucesso', () => {
        Login.preencherCrendeciaisValidas()
        Inventory.validarAcessoAPagina()
        Header.abrirMenu()
        Header.fazerLogout()
        Login.validarPaginaLogin()
    })
})