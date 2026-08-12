import Login from '../pages/login'
import Inventory from '../pages/inventory'

describe('Catálogo', () => {
    beforeEach(() => {
        Login.visitarPagina()
        Login.preencherCrendeciaisValidas()
    })

    it('Ordenar produtos por nome de A-Z', () => {
        Inventory.ordenarProdutos('az')

        Inventory.obterNomesProdutos().then((nomes) => {
            const ordenado = [...nomes].sort()
            expect(nomes).to.deep.equal(ordenado)
        })
    })

    it('Ordenar produtos por nome de Z-A', () => {
        Inventory.ordenarProdutos('za')

        Inventory.obterNomesProdutos().then((nomes) => {
            const ordenado = [...nomes].sort().reverse()
            expect(nomes).to.deep.equal(ordenado)
        })
    })

    it('Ordenar produtos por preço do menor para o maior', () => {
        Inventory.ordenarProdutos('lohi')

        Inventory.obterPrecosProdutos().then((precos) => {
            const ordenado = [...precos].sort((a, b) => a - b)
            expect(precos).to.deep.equal(ordenado)
        })
    })

    it('Ordenar produtos por preço do maior para o menor', () => {
        Inventory.ordenarProdutos('hilo')

        Inventory.obterPrecosProdutos().then((precos) => {
            const ordenado = [...precos].sort((a, b) => b - a)
            expect(precos).to.deep.equal(ordenado)
        })
    })

    it('Abrir detalhes de um produto e voltar para a listagem', () => {
        Inventory.abrirDetalhesDoProduto('Sauce Labs Backpack')

        cy.url().should('include', '/inventory-item.html?id=4')
        cy.contains('Sauce Labs Backpack').should('be.visible')

        Inventory.voltarParaListaDeProdutos()
        Inventory.validarAcessoAPagina()
    })
})
