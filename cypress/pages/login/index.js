import { elements as el } from "./elements"

class Login {

    visitarPagina() {
        cy.visit('https://www.saucedemo.com/')
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
        this.preencherCredenciais('standard_user', 'secret_sauce')
    }

    preencherCrendeciaisInvalidas() {
        this.preencherCredenciais('user.invalid', 'password')
    }

    validarErroCredenciaisEspecifica(mensagem) {
        cy.get(el.errorMessage).should('contain.text', mensagem)
        cy.url().should('eq', 'https://www.saucedemo.com/')
    }

    validarErroCredenciaisInvalidas() {
        this.validarErroCredenciaisEspecifica('Username and password do not match any user in this service')
        cy.screenshot('erro credenciais invalidas')
    }

    validarErroUsuarioBloqueado() {
        this.validarErroCredenciaisEspecifica('Sorry, this user has been locked out.')
        cy.screenshot('usuario bloqueado')
    }

    validarErroCampoObrigatorio(mensagem) {
        this.validarErroCredenciaisEspecifica(mensagem)
    }

    validarPaginaLogin() {
        cy.url().should('eq', 'https://www.saucedemo.com/')
        cy.get(el.loginButton).should('be.visible')
        cy.screenshot('pagina login')
    }

    validarRedirecionamentoParaLogin() {
        this.validarPaginaLogin()
    }
}

export default new Login()
