const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');

 botoesCarrossel.forEach((botao,indice) => {
    botao.addEventListener('click', () => {

      desmarcaBotaoAnterior();

          marcaBotaoSelecionado(botao);

           escondeImagemAnterior();
    
              mostraImagemDeFundo(indice);
    })
 })

function desmarcaBotaoAnterior() {
  const botaoSelecionado = document.querySelector('.selecionado');
  botaoSelecionado.classList.remove('selecionado');
}

function marcaBotaoSelecionado(botao) {
  botao.classList.add('selecionado');
}

function escondeImagemAnterior() {
  const imagemAtiva = document.querySelector('.ativa');
  imagemAtiva.classList.remove('ativa');
}

function mostraImagemDeFundo(indice) {
  imagens[indice].classList.add('ativa');
}
