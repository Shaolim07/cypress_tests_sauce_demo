import { elements as el } from "./elements"

class Inventory {

    validarAcessoAPagina() {
        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')
        cy.screenshot('acesso a pagina de inventario')
    }

    abrirPagina() {
        cy.visit('https://www.saucedemo.com/inventory.html')
    }

    adicionarProduto(itemName) {
        cy.get(el.addToCart(itemName)).click()
    }

    removerProduto(itemName) {
        cy.get(el.removeFromCart(itemName)).click()
    }

    validarBotaoAlternaParaRemover(itemName) {
        cy.get(el.removeFromCart(itemName)).should('be.visible')
    }

    validarBotaoAlternaParaAdicionar(itemName) {
        cy.get(el.addToCart(itemName)).should('be.visible')
    }

    ordenarProdutos(opcao) {
        cy.get(el.sortDropdown).select(opcao)
    }

    obterNomesProdutos() {
        return cy.get(el.itemNames).then(($items) => {
            return [...$items].map((item) => item.innerText.trim())
        })
    }

    obterPrecosProdutos() {
        return cy.get(el.itemPrices).then(($items) => {
            return [...$items].map((item) => Number(item.innerText.replace('$', '').trim()))
        })
    }

    abrirDetalhesDoProduto(itemName) {
        cy.contains(el.itemNames, itemName).click()
    }

    voltarParaListaDeProdutos() {
        cy.get(el.backToProducts).click()
    }

    validarListaDeProdutosVisivel() {
        cy.get(el.inventoryList).should('be.visible')
        cy.get(el.inventoryItem).should('have.length.at.least', 1)
    }
}

export default new Inventory()
