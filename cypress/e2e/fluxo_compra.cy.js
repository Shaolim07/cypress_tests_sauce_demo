import Login from '../pages/login'
import Inventory from '../pages/inventory'
import Header from '../pages/header'
import Cart from '../pages/cart'
import Checkout from '../pages/checkout'

describe('Fluxo de compra', () => {
    beforeEach(() => {
        Login.visitarPagina()
        Login.preencherCrendeciaisValidas()
    })

    it('Realizar fluxo completo de compra com sucesso', () => {
        Inventory.adicionarProduto('Sauce Labs Backpack')
        Header.navegarParaCarrinho()
        Cart.iniciarCheckout()
        Checkout.preencherInformacoes('João', 'Silva', '12345-678')
        Checkout.finalizar()
        Checkout.validarPedidoConcluido()
    })

    it('Confirmar pedido após checkout', () => {
        Inventory.adicionarProduto('Sauce Labs Bike Light')
        Header.navegarParaCarrinho()
        Cart.iniciarCheckout()
        Checkout.preencherInformacoes('Maria', 'Souza', '98765-432')
        Cart.validarProdutoPresenteCarrinho('Sauce Labs Bike Light')
        Checkout.finalizar()
        Checkout.validarPedidoConcluido()
    })

    it('Cancelar checkout e retornar para a navegação anterior', () => {
        Inventory.adicionarProduto('Sauce Labs Onesie')
        Header.navegarParaCarrinho()
        Cart.iniciarCheckout()
        Checkout.preencherInformacoes('Ana', 'Costa', '01010-000')
        Checkout.cancelar()
        cy.location('pathname').should('match', /\/cart\.html$|\/inventory\.html$/)
    })

    it('Validar campos obrigatórios vazios no formulário de checkout', () => {
        Inventory.adicionarProduto('Sauce Labs Backpack')
        Header.navegarParaCarrinho()
        Cart.iniciarCheckout()
        Checkout.continuar()
        Checkout.validarErroCampoObrigatorio('First Name is required')
    })
})
