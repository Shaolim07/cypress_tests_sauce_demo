import { elements as el } from "./elements"

class Header{
    validarQueCarrinhoPossuiItens(quantidade) {
        cy.get(el.cartBadge).should('be.visible').and('have.text', quantidade.toString())
    }

    navegarParaCarrinho() {
        cy.get(el.cartContainer).click()
    }

    validarQueCarrinhoNaoPossuiItens() {
        cy.get(el.cartBadge).should('not.exist')
        cy.screenshot('produto removido')
    }

    abrirMenu() {
        cy.get('#react-burger-menu-btn').click()
        cy.get('#logout_sidebar_link').should('be.visible')
    }

    fazerLogout() {
        cy.get('#logout_sidebar_link').click()
    }
}

export default new Header()