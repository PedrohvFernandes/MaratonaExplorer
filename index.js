const respostas = [
  'Certeza!',
  'Não tenho tanta certeza.',
  'É decididamente assim.',
  'Não conte com isso.',
  'Sem dúvidas!',
  'Pergunte novamente mais tarde.',
  'Sim, definitivamente!',
  'Minha resposta é não.',
  'Você pode contar com isso.',
  'Melhor não te dizer agora.',
  'A meu ver, sim.',
  'Minhas fontes dizem não.',
  'Provavelmente.',
  'Não é possível prever agora.',
  'Perspectiva boa.',
  'As perspectivas não são tão boas.',
  'Sim.',
  'Concentre-se e pergunte novamente.',
  'Sinais apontam que sim.'
]

function mostrarResposta(pergunta) {
  // Gera um numero aleatorio pra pegar na lista de respostas
  const totalDeResposta = respostas.length;
  const numeroAleatorio = Math.floor(Math.random() * totalDeResposta);
  let respostaSelecionada = respostas[numeroAleatorio]

  resposta.innerHTML = pergunta + respostaSelecionada;
  resposta.style.opacity = 1;

  // Sumir a resposta depois de 3 segundos
  setTimeout(function () {
    resposta.style.opacity = 0;
    btnPerguntar.removeAttribute('disabled')
    
  }, 3000)
}

// Faz a pergunta e mostra a resposta
function fazerPergunta() {
  if (inputPergunta.value === '') {
    alert('Digite sua pergunta')
    return
  }

  btnPerguntar.setAttribute('disabled', true);
  const pergunta = '<div>' + inputPergunta.value + '</div>'
  
  mostrarResposta(pergunta)
}
