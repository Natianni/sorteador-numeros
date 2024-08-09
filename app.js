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


function reiniciar(max, min) {
    numeroGerado = gerarNumeroAleatorio(max, min);
function reiniciar(max, min) {
    numeroGerado = gerarNumeroAleatorio(max, min);
    limparCampo();
    document.getElementById('btn-reiniciar').setAttribute ('disabled', true);
    escreverTextoNaTela('resultado', `<label id ="textoParagrafo" class="texto__paragrafo">Números sorteados: Nenhum até agora.</label>`);
}

function alertaErro (){
    let priNumero= document.getElementById('de').value;
    let segNumero = document.getElementById('ate').value;

    if (segNumero <= priNumero) {
        alert('Erro! O número máximo é menor que o mínimo, verifique se os digitou corretamente.');
        reiniciar()
        return true;
    } return false;
        reiniciar()
        return true;
    } return false;
}