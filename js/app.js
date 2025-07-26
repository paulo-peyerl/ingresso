let carrinho = [];

function comprar() {
    let tipoIngresso = document.getElementById('tipo-ingresso').value;
    let quantidadeDeIngressos = document.getElementById('qtd').value;

    let item ={
        ingresso: tipoIngresso,
        quantidade: quantidadeDeIngressos
    };

    if(quantidadeDeIngressos === '' || quantidadeDeIngressos <= 0){
        alert('Quantidade inválida. Arrume e tente novamente!');
    }
    carrinho.push(item);
}