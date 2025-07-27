let carrinho = [];

function comprar() {
    let tipoIngresso = document.getElementById('tipo-ingresso').value;
    let quantidadeDeIngressos = document.getElementById('qtd').value;
    let quantidadePista = document.getElementById('qtd-pista');
    let quantidadeInferior = document.getElementById('qtd-inferior');
    let quantidadeSuperior = document.getElementById('qtd-superior');

    let item ={
        ingresso: tipoIngresso,
        quantidade: quantidadeDeIngressos
    };

    if(isNaN(item.quantidade) || item.quantidade <= 0){
        alert('Quantidade inválida. Arrume e tente novamente!');
        return;
    }

    if(tipoIngresso === 'pista'){
        if(item.quantidade > parseInt(quantidadePista.textContent)){
            alert('Quantidade indisponível para Pista!');
            return
        }
        quantidadePista.textContent -= quantidadeDeIngressos;
    }else if(tipoIngresso === 'inferior'){
        if(item.quantidade > parseInt(quantidadeInferior.textContent)){
            alert('Quantidade indisponível para a Cadeira Inferior');
            return;
        }
        quantidadeInferior.textContent -= quantidadeDeIngressos;
    }else if(tipoIngresso === 'superior'){
        if(item.quantidade > parseInt(quantidadeSuperior.textContent)){
            alert('Quantidade indisponível para a Cadeira Superior');
        }
        quantidadeSuperior.textContent -= quantidadeDeIngressos;
        return; 
    }
    carrinho.push(item);
}