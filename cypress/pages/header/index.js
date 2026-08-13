import { elements as el } from "./elements"

class Header {
    validarQueCarrinhoPossuiItens(quantidade) {
        cy.get(el.cartBadge).should('be.visible').and('have.text', quantidade.toString())
    }

    validarQueCarrinhoNaoPossuiItens() {
        cy.get(el.cartBadge).should('not.exist')
        cy.screenshot('produto removido')
    }

    obterQuantidadeItensCarrinho() {
        return cy.get('body').then(($body) => {
            const badge = $body.find(el.cartBadge)
            return badge.length ? Number(badge.text().trim()) : 0
        })
    }

    navegarParaCarrinho() {
        cy.get(el.cartContainer).click()
    }

    abrirMenu() {
        cy.get(el.menuButton).click()
        cy.get(el.logoutLink).should('be.visible')
    }

    fazerLogout() {
        cy.get(el.logoutLink).click()
    }
}

export default new Header()
