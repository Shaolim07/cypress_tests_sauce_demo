export default class BasePage {
    acessarUrl(url) {
        cy.visit(url)
    }

    validarUrl(urlEsperada) {
        cy.url().should('eq', urlEsperada)
    }

    validarUrlContem(texto) {
        cy.url().should('include', texto)
    }

    validarTextoPresente(selector, texto) {
        cy.get(selector).should('contain.text', texto)
    }

    capturarTela(nomeArquivo) {
        cy.screenshot(nomeArquivo)
    }
}
