produtos.forEach(element => {
    let precoElemento = element.querySelector('.preco-produto')
    precoElemento.innerHTML = `R$${element.getAttribute('data-preco')}`
})
