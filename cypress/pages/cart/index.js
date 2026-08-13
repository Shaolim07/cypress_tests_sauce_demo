import { elements as el } from "./elements"

class Cart {
    validarProdutoPresenteCarrinho(name) {
        cy.contains(name).should('be.visible')
        cy.screenshot('produto adicionado')
    }

    validarQuantidadeProdutos(quantidade) {
        cy.get(el.itemRow).should('have.length', quantidade)
    }

    removerProdutoDoCarrinho(itemName) {
        cy.contains(el.itemRow, itemName).find('button').click()
    }

    iniciarCheckout() {
        cy.get(el.checkoutButton).click()
    }

    preencherDadosCheckout(firstName, lastName, postalCode) {
        cy.get(el.firstNameInput).clear().type(firstName)
        cy.get(el.lastNameInput).clear().type(lastName)
        cy.get(el.postalCodeInput).clear().type(postalCode)
        cy.get(el.continueButton).click()
    }

    continuarParaResumo() {
        cy.get(el.continueButton).click()
    }

    cancelarCheckout() {
        cy.get(el.cancelButton).click()
    }

    concluirCompra() {
        cy.get(el.finishButton).click()
    }

    validarPedidoConcluido() {
        cy.contains('Thank you for your order!').should('be.visible')
        cy.screenshot('pedido concluido')
    }

    validarMensagemErroCampoObrigatorio(mensagem) {
        cy.contains(mensagem).should('be.visible')
    }
}

export default new Cart()
