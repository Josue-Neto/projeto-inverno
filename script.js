    function alternarModoEscuro() {
      document.body.classList.toggle("dark-mode");
    }

    function alternarMenu() {
      const menu = document.getElementById("menuLateral");
      const puxador = document.getElementById("puxador");
      menu.classList.toggle("aberto");
      puxador.textContent = menu.classList.contains("aberto") ? "✕" : "☰";
    }

    // Efeito de digitação na caixa de diálogo
   function digitarTexto(texto, elementoId) {
      const el = document.getElementById(elementoId);
      el.innerHTML = "";
      let i = 0;
      const intervalo = setInterval(() => {
        el.innerHTML += texto.charAt(i);
        i++;
        if (i > texto.length) clearInterval(intervalo);
      }, 5);
    }

const atos = [
  {
    nome: "Ato 1: A Chegada",
    imagem: "img/ato1.jpg",
    texto: "O outono está chegando ao fim, com seus tons de laranja e marrom que sempre me encantaram. É questão de tempo até o inverno voltar novamente. Pela minha 16ª estação aqui, talvez a última, essa vida nunca esteve tão sombria. Não há motivos para esperar mais uma primavera. A neve parecia o lugar perfeito para se deitar e descansar eternamente, era o que eu tinha planejado para aquele inverno... até você chegar. Lembro-me bem da primeira queda do floco de neve diante de nós dois"
  },
  {
    nome: "Ato 2: Rei Das Sombras",
    imagem: "img/ato2.jpg",
    texto: "Você se aproximou, e eu não esperava mais ninguém, apenas o inverno. Você era grande, peludo, uma sombra viva que parecia saber exatamente quem eu era. Como a sombra que me persegue há anos, você tinha um olhar que me conhecia profundamente. 'Me chamo Haco, a raposa vermelha, você já me conhece?', perguntei. Você concordou com a cabeça, como se confirmasse a minha identidade, e então se apresentou: Rei das Sombras. Sua postura era confiante e imponente, mas havia algo mais - uma curiosidade sobre mim que não conseguia esconder completamente. Notei que, apesar de sua imponência, você estava inseguro, com o rabo entre as patas traseiras. 'Podemos nos encontrar e conhecer melhor depois?' você perguntou, eu disse que poderiamos, e ali, naquele momento, nossos caminhos se cruzaram pela primeira vez como a primeira queda de neve daquele ano."
  },
  {
    nome: "Ato 3: Algo Cresce",
    imagem: "img/ato3.jpg",
    texto: "Dias após a primeira queda de neve, eu sabia que precisava encontrar aquele lobo novamente. Sua silhueta e olhos me perseguiam nos pensamentos, crescendo em importância a cada momento. Você havia sido claro: a maior árvore morta da região seria o nosso ponto de encontro. Ao chegar lá, fiquei cativado ao avistar um girassol crescendo em solo congelado. E então, eu vi você - o Rei das Sombras, cercado por uma multidão de animais de diversas espécies. Não era apenas um rei solitário, mas um irmão que protegia e cuidava de sua familia. Descobri que cada animal que vivia ali era resgatado por você, que os protegia do inverno e lhes dava chance de crescer. Meus olhos brilharam ao saber disso, mas meu tempo estava se esgotando. Logo, tive que partir, mas algo dentro de mim continuava a crescer - uma conexão com aquele lobo majestoso."
  },
  {
    nome: "Ato 4: O Dourado",
    imagem: "img/ato4.jpg",
    texto: "Com o passar do tempo, aquele inverno sombrio se tornou ainda mais cruel. No entanto, o lobo e eu, uma simples raposa, nos aproximamos e descobrimos mais sobre cada um. Mas agora, sinto que é hora de ir além da formalidade. Posso te chamar apenas de Sombra? E seria indelicado demais lembrar como, nesse deserto branco, você me fez ver o que há de melhor nessa estação amaldiçoada? Como tudo ao seu redor era o oposto do que você é e do que você representa? Você percebe isso? Como o solo parece ouro quando você está aqui? Quando caminhamos juntos, os brilhos caíam sobre nós, e seu pelo escuro era pintado de dourado profundo na luz. Seu olhar era como um pequeno brilho de sol, um lar. Você sabe, deve saber, de tudo isso."
  },
  {
    nome: "Ato 5: A Tempestade",
    imagem: "img/ato5.jpg",
    texto: "Eu odeio pensar sobre tudo isso. Os pensamentos sobre aquela sombra caem sobre mim, se juntam e me sufocam, me deixando soterrado. É como uma nevasca de pensamentos sobre você - sobre quem você é, sobre como eu admiro você, sobre como eu vejo você, sobre o que poderíamos ser. Eu me perco em todos esses pensamentos. Tenho permissão para pensar e sentir tudo isso? Tenho permissão para pensar em você? Esse sentimento está crescendo cada vez mais, como uma hera que me envolve. Tudo o que há na minha cabeça, dentro e o que cai sobre ela, é uma tempestade. Qual delas vai acabar comigo primeiro?"
  },
  {
    nome: "Ato 6: Um Pouco Mais",
    imagem: "img/ato6.jpg",
    texto: "Sei que não faz muito tempo desde que você me descobriu, me desenterrou como um resto de uma ossada. E por algum motivo, tudo mudou para mim. Você fez tão pouco, mas tocou profundamente em mim. Como é possível que você tenha feito tão pouco e, no entanto, tenha significado tanto para mim? Isso parece injusto com você. Eu só posso fazer um pouco mais a cada momento para você. Talvez eu devesse parar de me importar tanto com isso. Se tudo isso estiver bem para você, está bem para mim. Mas se não for nada para você, então também não é nada para mim. Mas por agora, podemos ir um pouco mais fundo em saber de nossas histórias, um do outro?"
  },
  {
    nome: "Ato 7: Soterrado",
    imagem: "img/ato7.jpg",
    texto: "Estou cansado de ouvir as corujas, que durante toda a noite, falam mal de você. Se são tão sábias, deveriam saber que não devem se envolver em assuntos alheios. E os esquilos estúpidos que zombam do seu tamanho... Eu poderia caçar todos esses ratos das suas tocas. Estou bravo com todas essas vozes na minha cabeça, que me fazem temer cair em uma caverna sem fundo ou me perder na mais escura floresta. Mas eu sei que essa espera vale a pena. Até lá, vou silenciar todas essas vozes e confiar no tempo."
  },
  {
    nome: "Ato 8: A Primavera",
    imagem: "img/ato8.jpg",
    texto: "Ó, inverno impiedoso, poderia ser mais gentil por um tempo? E começar a dar espaço à primavera? Deixar as flores florir, os animais saírem de seus abrigos... Estou esperando isso desde a primeira queda de neve. Ei, nevasca, poderia cessar por um tempo? Parar de cair sobre o meu amado e permitir que essa paixão floresça? Estou ansioso pela primeira flor da primavera, mesmo que esse amor não venha a raiar. Porque agora eu vejo que tudo isso é belo. E na 17ª estação que você chegar, vou fazer tudo certo. E se o tempo quiser, com ele quero fazer aflorar esse amor."
  },
  {
    nome: "Ato 9: Verdade",
    imagem: "img/ato0.jpg",
    texto: "Muita neve caiu entre nós e eu não tenho certeza sobre o que isso pode se tornar. Mas a verdade é que estou apaixonado e me apaixono cada vez mais por você. Admiro tudo o que você fez, faz e irá fazer. Ainda não sei muito sobre você, mas quero conhecer você melhor, descobrir suas histórias, suas complexidades e suas experiências nesse mundo. Talvez eu não seja brilhante o suficiente ao seu lado, mas sinto uma chama dentro de mim e quero que você a conheça melhor. A verdade é que vou esperar por você, pelo tempo e pelo que você decidir. Só de saber que você me notou, eu já estou feliz. E essa felicidade permanecerá, independentemente do que aconteça."
  },
  {
   nome: "Ato 10: Rei De Todo Dourado",
    imagem: "img/ato10.jpg",
    texto: "Hoje, eu quero que você saiba que está sendo desejado. Eu não tenha títulos, feitos ou uma reputação que me deem poder para isso e dizer isso, mas descobri durante esse inverno que estou vivendo um verão. E nesse verão que estou, que você me colocou, eu te nomeio Rei de Todo Dourado. Onde quer que você passe, será iluminado por você mesmo. Você é o meu Rei Midas, que me iluminou e transformou tudo em ouro. Essa é a idade de ouro, um tempo de coisas boas, certas e reais. Rei de Todo Dourado."
  }
];

    let atoAtual = 0;

    function mostrarAto(indice) {
      document.getElementById("telaInicial").style.display = "none";
      document.getElementById("ato").style.display = "flex";
      atualizarAto(indice);
    }

    function atualizarAto(indice) {
      const ato = atos[indice];
      document.getElementById("atoNome").innerText = ato.nome;

      const imagemEl = document.getElementById("atoImagem");
      imagemEl.classList.remove("animar");
      void imagemEl.offsetWidth; // força reinício da animação
      imagemEl.src = ato.imagem;
      imagemEl.classList.add("animar");

       const dialogoEl = document.getElementById("dialogo");
      dialogoEl.classList.remove("dialogo");
      void dialogoEl.offsetWidth; // força reinício da animação
      dialogoEl.classList.add("dialogo");
      digitarTexto(ato.texto, "dialogo");
      atoAtual = indice;
    }

    function mudarAto(direcao) {
      const novoIndice = atoAtual + direcao;
      if (novoIndice >= 0 && novoIndice < atos.length) {
        atualizarAto(novoIndice);
      } else if (novoIndice < 0) {
        voltarInicio();
      }
    }

    function voltarInicio() {
      document.getElementById("ato").style.display = "none";
      document.getElementById("telaInicial").style.display = "flex";
    }

    function criarFlocoDeNeve() {
  const floco = document.createElement("div");
  floco.classList.add("floco");

  const tamanho = Math.random() * 5 + 5 + "px";
  floco.style.width = tamanho;
  floco.style.height = tamanho;

  floco.style.left = Math.random() * window.innerWidth + "px";
  floco.style.animationDuration = Math.random() * 5 + 5 + "s";

  document.body.appendChild(floco);

  setTimeout(() => {
    floco.remove();
  }, 10000);
}

// Cria flocos continuamente
setInterval(criarFlocoDeNeve, 200);