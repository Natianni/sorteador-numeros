function escreverTextoNaTela (id, texto,) {
    let paragrafo = document.getElementById (id);
    paragrafo.innerHTML = texto;
}

document.getElementById('btn-reiniciar').setAttribute ('disabled', true); //desabilita o botao reiniciar.

function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);
    let listaDeNumerosSorteados = [];
    let numeroGerado;
    
    if (alertaErro()) {
        reiniciar();
        return; // Sai da função se houver erro
    }

    if (quantidade > (ate - de + 1)) {
        alert('Campo "Quantidade" deve ser menor ou igual ao intervalo informado no campo "Do número" até o campo "Até o número". Verifique!');
        limparCampo();
        return;
        }

    for (let i = 0; i < quantidade; i++) {
        numeroGerado = gerarNumeroAleatorio(ate, de);    
        
        while (listaDeNumerosSorteados.includes(numeroGerado)) {
            numeroGerado = gerarNumeroAleatorio(ate, de);
        }

        listaDeNumerosSorteados.push(numeroGerado);
    }

    let palavraNumerosSorteados = quantidade > 1 ? 'Números sorteados' : 'Número sorteado';// verifica se o numero de tentativas é maior que 1
    escreverTextoNaTela('resultado',`<label id ="textoParagrafo" class="texto__paragrafo">${palavraNumerosSorteados}: ${listaDeNumerosSorteados}</label>`);
    document.getElementById('btn-reiniciar').removeAttribute ('disabled');
    console.log(listaDeNumerosSorteados);
}

function gerarNumeroAleatorio(max, min) {
    return Math.floor(Math.random() * (max - min + 1)) + min;   
}

function limparCampo() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
}


function reiniciar() { // Removi os parâmetros desnecessários (max, min) da função reiniciar.
    limparCampo(); // Removi a linha duplicada que gerava número aleatório aqui, o que não fazia sentido.
    document.getElementById('btn-reiniciar').setAttribute('disabled', true);
    escreverTextoNaTela('resultado', `<label id ="textoParagrafo" class="texto__paragrafo">Números sorteados: Nenhum até agora.</label>`);
}

function alertaErro() { // Corrigi a função alertaErro
    let priNumero = parseInt(document.getElementById('de').value); // Parse dos valores para garantir que são números.
    let segNumero = parseInt(document.getElementById('ate').value);

    if (segNumero <= priNumero) { // Condição corrigida para evitar duplicidade e erro de lógica.
        alert('Erro! O número máximo é menor ou igual ao mínimo, verifique se os digitou corretamente.');
        return true; // Removi a duplicidade de código que chamava reiniciar e retornava duas vezes.
    }
    return false; // Retorno correto após validação.
}
