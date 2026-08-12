import Login from '../pages/login'
import Inventory from '../pages/inventory'
import Header from '../pages/header'
import Cart from '../pages/cart'

describe('Carrinho', () => {
    beforeEach(() => {
        Login.visitarPagina()
        Login.preencherCrendeciaisValidas()
    })

    it('Adicionar vários produtos diferentes ao carrinho com sucesso', () => {
        Inventory.adicionarProduto('Sauce Labs Backpack')
        Inventory.adicionarProduto('Sauce Labs Bike Light')

        Header.validarQueCarrinhoPossuiItens(2)
        Header.navegarParaCarrinho()

        Cart.validarQuantidadeProdutos(2)
        Cart.validarProdutoPresenteCarrinho('Sauce Labs Backpack')
        Cart.validarProdutoPresenteCarrinho('Sauce Labs Bike Light')
    })

    it('Adicionar o mesmo produto mais de uma vez não incrementa o badge', () => {
        Inventory.adicionarProduto('Sauce Labs Backpack')
        Header.validarQueCarrinhoPossuiItens(1)

        cy.get('[data-test="remove-sauce-labs-backpack"]').should('be.visible')
        cy.get('.shopping_cart_badge').should('have.text', '1')
    })

    it('Badge do carrinho com número maior que 1 após adicionar múltiplos itens', () => {
        Inventory.adicionarProduto('Sauce Labs Backpack')
        Inventory.adicionarProduto('Sauce Labs Bolt T-Shirt')
        Inventory.adicionarProduto('Sauce Labs Onesie')

        Header.validarQueCarrinhoPossuiItens(3)
    })

    it('Remover produto pelo carrinho e validar contagem', () => {
        Inventory.adicionarProduto('Sauce Labs Backpack')
        Inventory.adicionarProduto('Sauce Labs Bike Light')

        Header.navegarParaCarrinho()
        Cart.removerProdutoDoCarrinho('Sauce Labs Backpack')
        Cart.validarQuantidadeProdutos(1)
        cy.get('.shopping_cart_badge').should('have.text', '1')
    })
})