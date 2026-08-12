import { elements as el} from "./elements"

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

    preencherCrendeciaisValidas() {
        this.preencherCredenciais('standard_user', 'secret_sauce')
    }

    preencherCrendeciaisInvalidas() {
        this.preencherCredenciais('user.invalid', 'password')
    }

    validarErroCredenciaisInvalidas() {
        cy.get(el.errorMessage).should(
            'contain.text',
            'Username and password do not match any user in this service'
            )
        cy.url().should('eq', 'https://www.saucedemo.com/')
        cy.screenshot('erro credenciais invalidas')
    }

    validarErroUsuarioBloqueado() {
        cy.get(el.errorMessage).should(
            'contain.text',
            'Sorry, this user has been locked out.'
        )
        cy.url().should('eq', 'https://www.saucedemo.com/')
        cy.screenshot('usuario bloqueado')
    }

    validarErroCampoObrigatorio(mensagem) {
        cy.get(el.errorMessage).should('contain.text', mensagem)
        cy.url().should('eq', 'https://www.saucedemo.com/')
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