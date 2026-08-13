import BasePage from '../base.page'
import { elements as el } from "./elements"

class Checkout extends BasePage {
    preencherInformacoes(firstName, lastName, postalCode) {
        cy.get(el.firstNameInput).clear().type(firstName)
        cy.get(el.lastNameInput).clear().type(lastName)
        cy.get(el.postalCodeInput).clear().type(postalCode)
        cy.get(el.continueButton).click()
    }

    continuar() {
        cy.get(el.continueButton).click()
    }

    cancelar() {
        cy.get(el.cancelButton).click()
    }

    finalizar() {
        cy.get(el.finishButton).click()
    }

    validarPedidoConcluido() {
        cy.contains('Thank you for your order!').should('be.visible')
    }

    validarErroCampoObrigatorio(mensagem) {
        cy.contains(mensagem).should('be.visible')
    }
}

export default new Checkout()
