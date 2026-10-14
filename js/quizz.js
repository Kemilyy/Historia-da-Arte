const perguntas = [
  {
    enunciado: "O período da Pré-História é caracterizado por:",
    alternativas: [
      "obras de arte abstratas",
      "obras de arte figurativas",
      "obras de arte religiosas",
      "obras de arte de natureza",
    ],
    resposta: 1,
    explicacao:
      "As obras de arte pré-históricas, como as pinturas de Lascaux, retratavam principalmente a vida cotidiana e a relação do homem com a natureza.",
  },
  {
    enunciado: "Onde foram feitas as pinturas rupestres de Lascaux?",
    alternativas: [
      "Em telas a óleo",
      "Em paredes de cavernas",
      "Em vitrais de igrejas",
      "Em manuscritos sagrados",
    ],
    resposta: 1,
    explicacao:
      "Rupestre vem de rocha: as pinturas foram feitas diretamente nas paredes de cavernas, no sul da França.",
  },
  {
    enunciado:
      "Qual civilização antiga é conhecida por suas pirâmides e monumentos dedicados aos faraós?",
    alternativas: ["Roma", "Mesopotâmia", "Grécia", "Egito"],
    resposta: 3,
    explicacao:
      "O Egito Antigo construiu pirâmides, templos e esculturas monumentais ligados à religião e ao poder dos faraós.",
  },
  {
    enunciado: "Qual destes é um exemplo de templo clássico da Grécia Antiga?",
    alternativas: [
      "Catedral de Notre-Dame",
      "Torre Eiffel",
      "Partenon",
      "Basílica de São Pedro",
    ],
    resposta: 2,
    explicacao:
      "O Partenon, em Atenas, foi dedicado à deusa Atena e é um dos maiores símbolos da arquitetura clássica.",
  },
  {
    enunciado: "Qual instituição mais influenciou a arte na Idade Média?",
    alternativas: [
      "A Igreja Cristã",
      "As academias de belas-artes",
      "Os museus públicos",
      "As galerias de arte contemporânea",
    ],
    resposta: 0,
    explicacao:
      "Na Idade Média a arte valorizava a espiritualidade e a simbologia religiosa, e a Igreja Cristã era a principal encomendante das obras.",
  },
  {
    enunciado: "Qual característica marca a arquitetura gótica?",
    alternativas: [
      "Formas geométricas cúbicas",
      "Estruturas de concreto e vidro",
      "Colunas e frontões inspirados na Grécia",
      "Arcos ogivais e grandes vitrais coloridos",
    ],
    resposta: 3,
    explicacao:
      "As catedrais góticas têm arcos pontiagudos (ogivais) e enormes vitrais que enchem o interior de luz colorida.",
  },
  {
    enunciado: "Quem pintou a Mona Lisa?",
    alternativas: [
      "Leonardo da Vinci",
      "Pablo Picasso",
      "Vincent van Gogh",
      "Claude Monet",
    ],
    resposta: 0,
    explicacao:
      "Leonardo da Vinci pintou a Mona Lisa no início do século XVI, no auge do Renascimento italiano.",
  },
  {
    enunciado:
      "Qual recurso permitiu aos artistas do Renascimento representar profundidade de forma realista?",
    alternativas: ["Colagem", "Perspectiva", "Performance", "Abstração"],
    resposta: 1,
    explicacao:
      "A perspectiva, junto com o estudo da anatomia, deu mais realismo às pinturas renascentistas.",
  },
  {
    enunciado: "Qual destes movimentos pertence à Arte Moderna?",
    alternativas: [
      "Arte rupestre",
      "Estilo gótico",
      "Impressionismo",
      "Arte bizantina",
    ],
    resposta: 2,
    explicacao:
      "O Impressionismo surgiu no fim do século XIX e rompeu com as tradições acadêmicas, abrindo caminho para a Arte Moderna.",
  },
  {
    enunciado: "Qual artista foi um dos criadores do Cubismo?",
    alternativas: [
      "Michelangelo",
      "Rafael",
      "Leonardo da Vinci",
      "Pablo Picasso",
    ],
    resposta: 3,
    explicacao:
      "Pablo Picasso e Georges Braque criaram o Cubismo no início do século XX, decompondo as formas em figuras geométricas.",
  },
  {
    enunciado: "Salvador Dalí é um dos nomes mais conhecidos de qual movimento?",
    alternativas: ["Surrealismo", "Renascimento", "Gótico", "Arte rupestre"],
    resposta: 0,
    explicacao:
      "Dalí é um ícone do Surrealismo, movimento que explorou o sonho e o inconsciente. Pense em “A Persistência da Memória”, com os relógios derretendo.",
  },
  {
    enunciado: "Quais destas são mídias comuns na Arte Contemporânea?",
    alternativas: [
      "Vitrais góticos e iluminuras",
      "Instalações, vídeo e performance",
      "Apenas pintura rupestre",
      "Somente afrescos renascentistas",
    ],
    resposta: 1,
    explicacao:
      "A Arte Contemporânea usa muitas mídias, como instalações, vídeo, performance e arte conceitual.",
  },
];

const telaPergunta = document.getElementById("tela-pergunta");
const telaResultado = document.getElementById("tela-resultado");
const contadorEl = document.getElementById("contador");
const barraEl = document.querySelector(".barra");
const barraPreenchidaEl = document.getElementById("barra-preenchida");
const enunciadoEl = document.getElementById("enunciado");
const alternativasEl = document.getElementById("alternativas");
const feedbackEl = document.getElementById("feedback");
const btnProxima = document.getElementById("btn-proxima");
const btnRefazer = document.getElementById("btn-refazer");
const tituloResultadoEl = document.getElementById("titulo-resultado");
const textoResultadoEl = document.getElementById("texto-resultado");

let atual = 0;
let acertos = 0;
let revelada = false; 

function mostrarPergunta() {
  const p = perguntas[atual];
  revelada = false;

  contadorEl.textContent = `Pergunta ${atual + 1} de ${perguntas.length}`;
  const porcentagem = Math.round((atual / perguntas.length) * 100);
  barraPreenchidaEl.style.width = porcentagem + "%";
  barraEl.setAttribute("aria-valuenow", porcentagem);

  enunciadoEl.textContent = p.enunciado;

  alternativasEl.classList.remove("travado");
  alternativasEl.innerHTML = "";
  p.alternativas.forEach((texto, i) => {
    const label = document.createElement("label");
    label.className = "alternativa";

    const input = document.createElement("input");
    input.type = "radio";
    input.name = "resposta";
    input.value = i;
    input.addEventListener("change", verResposta); 

    const caixa = document.createElement("span");
    caixa.textContent = texto;

    label.append(input, caixa);
    alternativasEl.appendChild(label);
  });

  feedbackEl.hidden = true;
  feedbackEl.innerHTML = "";

  btnProxima.disabled = true;
  btnProxima.textContent =
    atual === perguntas.length - 1 ? "Ver resultado" : "Próxima pergunta";
}

function verResposta() {
  if (revelada) return;

  const marcada = alternativasEl.querySelector("input:checked");
  if (!marcada) return;

  const escolhida = Number(marcada.value);
  const p = perguntas[atual];
  const acertou = escolhida === p.resposta;

  revelada = true;
  if (acertou) acertos++;

  const caixas = alternativasEl.querySelectorAll(".alternativa span");
  alternativasEl.querySelectorAll("input").forEach((input) => (input.disabled = true));
  alternativasEl.classList.add("travado");
  caixas[p.resposta].classList.add("correta");
  if (!acertou) caixas[escolhida].classList.add("errada");

  feedbackEl.innerHTML = "";
  const titulo = document.createElement("strong");
  titulo.textContent = acertou
    ? "Resposta correta!"
    : `A resposta correta é: ${p.alternativas[p.resposta]}.`;
  feedbackEl.append(titulo, p.explicacao);
  feedbackEl.hidden = false;

  btnProxima.disabled = false; // só libera depois de responder
}

function proxima() {
  if (!revelada) return;

  if (atual < perguntas.length - 1) {
    atual++;
    mostrarPergunta();
    enunciadoEl.focus();
  } else {
    mostrarResultado();
  }
}

function mostrarResultado() {
  const total = perguntas.length;
  barraPreenchidaEl.style.width = "100%";
  barraEl.setAttribute("aria-valuenow", 100);

  tituloResultadoEl.textContent = `Você acertou ${acertos} de ${total}`;

  const proporcao = acertos / total;
  let mensagem;
  if (proporcao === 1) {
    mensagem = "Perfeito! Você domina a história da arte.";
  } else if (proporcao >= 0.7) {
    mensagem = "Muito bem! Você conhece bastante sobre a história da arte.";
  } else if (proporcao >= 0.4) {
    mensagem = "Bom começo! Revise a linha do tempo e tente de novo.";
  } else {
    mensagem = "Que tal rever a linha do tempo e tentar outra vez?";
  }
  textoResultadoEl.textContent = mensagem;

  telaPergunta.hidden = true;
  telaResultado.hidden = false;
  tituloResultadoEl.focus();
}

function refazer() {
  atual = 0;
  acertos = 0;
  telaResultado.hidden = true;
  telaPergunta.hidden = false;
  mostrarPergunta();
  enunciadoEl.focus();
}

btnProxima.addEventListener("click", proxima);
btnRefazer.addEventListener("click", refazer);

mostrarPergunta();
