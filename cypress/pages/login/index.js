import BasePage from '../base.page'
import { elements as el } from "./elements"
import { users } from '../../support/testData'

class Login extends BasePage {

    visitarPagina() {
        this.acessarUrl('https://www.saucedemo.com/')
    }

    preencherCredenciais(username, password) {
        cy.get(el.username).clear()
        cy.get(el.password).clear()

        if (username !== '') {
            cy.get(el.username).type(username)
        }

        if (password !== '') {
            cy.get(el.password).type(password)
        }

        cy.get(el.loginButton).click()
    }

    loginCom(username, password) {
        this.preencherCredenciais(username, password)
    }

    preencherCrendeciaisValidas() {
        this.preencherCredenciais(users.valid.username, users.valid.password)
    }

    preencherCrendeciaisInvalidas() {
        this.preencherCredenciais(users.invalid.username, users.invalid.password)
    }

    validarErroCredenciaisEspecifica(mensagem) {
        cy.get(el.errorMessage).should('contain.text', mensagem)
        this.validarUrl('https://www.saucedemo.com/')
    }

    validarErroCredenciaisInvalidas() {
        this.validarErroCredenciaisEspecifica('Username and password do not match any user in this service')
        this.capturarTela('erro credenciais invalidas')
    }

    validarErroUsuarioBloqueado() {
        this.validarErroCredenciaisEspecifica('Sorry, this user has been locked out.')
        this.capturarTela('usuario bloqueado')
    }

    validarErroCampoObrigatorio(mensagem) {
        this.validarErroCredenciaisEspecifica(mensagem)
    }

    validarPaginaLogin() {
        this.validarUrl('https://www.saucedemo.com/')
        cy.get(el.loginButton).should('be.visible')
        this.capturarTela('pagina login')
    }

    validarRedirecionamentoParaLogin() {
        this.validarPaginaLogin()
    }
}

export default new Login()
