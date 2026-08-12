import Login from '../pages/login'
import Inventory from '../pages/inventory'
import Header from '../pages/header'
import Cart from '../pages/cart'

describe('Fluxo de compra', () => {
    beforeEach(() => {
        Login.visitarPagina()
        Login.preencherCrendeciaisValidas()
    })

    it('Realizar fluxo completo de compra com sucesso', () => {
        Inventory.adicionarProduto('Sauce Labs Backpack')
        Header.navegarParaCarrinho()
        Cart.iniciarCheckout()
        Cart.preencherDadosCheckout('João', 'Silva', '12345-678')
        Cart.concluirCompra()
        Cart.validarPedidoConcluido()
    })

    it('Confirmar pedido após checkout', () => {
        Inventory.adicionarProduto('Sauce Labs Bike Light')
        Header.navegarParaCarrinho()
        Cart.iniciarCheckout()
        Cart.preencherDadosCheckout('Maria', 'Souza', '98765-432')
        Cart.validarProdutoPresenteCarrinho('Sauce Labs Bike Light')
        Cart.concluirCompra()
        Cart.validarPedidoConcluido()
    })

    it('Cancelar checkout e retornar para a navegação anterior', () => {
        Inventory.adicionarProduto('Sauce Labs Onesie')
        Header.navegarParaCarrinho()
        Cart.iniciarCheckout()
        Cart.preencherDadosCheckout('Ana', 'Costa', '01010-000')
        Cart.cancelarCheckout()
        cy.location('pathname').should('match', /\/cart\.html$|\/inventory\.html$/)
    })

    it('Validar campos obrigatórios vazios no formulário de checkout', () => {
        Inventory.adicionarProduto('Sauce Labs Backpack')
        Header.navegarParaCarrinho()
        Cart.iniciarCheckout()
        cy.get('[data-test="continue"]').click()
        Cart.validarMensagemErroCampoObrigatorio('First Name is required')
    })
})
