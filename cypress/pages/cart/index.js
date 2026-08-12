class Cart{
    validarProdutoPresenteCarrinho(name){
        cy.contains(name).should('be.visible')
        cy.screenshot('produto adicionado')
    }

    validarQuantidadeProdutos(quantidade){
        cy.get('.cart_item').should('have.length', quantidade)
    }

    removerProdutoDoCarrinho(itemName){
        cy.contains('.cart_item', itemName).find('button').click()
    }

    iniciarCheckout(){
        cy.get('[data-test="checkout"]').click()
    }

    preencherDadosCheckout(firstName, lastName, postalCode){
        cy.get('[data-test="firstName"]').clear().type(firstName)
        cy.get('[data-test="lastName"]').clear().type(lastName)
        cy.get('[data-test="postalCode"]').clear().type(postalCode)
        cy.get('[data-test="continue"]').click()
    }

    continuarParaResumo(){
        cy.get('[data-test="continue"]').click()
    }

    cancelarCheckout(){
        cy.get('[data-test="cancel"]').click()
    }

    concluirCompra(){
        cy.get('[data-test="finish"]').click()
    }

    validarPedidoConcluido(){
        cy.contains('Thank you for your order!').should('be.visible')
        cy.screenshot('pedido concluido')
    }

    validarMensagemErroCampoObrigatorio(mensagem){
        cy.contains(mensagem).should('be.visible')
    }
}

export default new Cart()