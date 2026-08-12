import { elements as el } from "./elements"

class Inventory {

    validarAcessoAPagina() {
        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')
        
        cy.screenshot('acesso a pagina de inventário')
    }

    adicionarProduto(itemName) {
        cy.get(el.addToCart(itemName)).click()
    }

    removerProduto(itemName) {
        cy.get(el.removeFromCart(itemName)).click()
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
        cy.contains('.inventory_item_name', itemName).click()
    }

    voltarParaListaDeProdutos() {
        cy.get(el.backToProducts).click()
    }
}

export default new Inventory()