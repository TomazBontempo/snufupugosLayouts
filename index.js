// Gallery controls//
const controls = document.querySelectorAll(".control");
const items = document.querySelectorAll(".item");
const maxItems = items.length;
let currentItem = 0;

//Função que cria a variavel de controle e observa o evento de click do botão da seta esquerda.//
controls.forEach((control) => {
  control.addEventListener("click", (e) => {
    isLeft = e.target.classList.contains("arrow-left");

    //controla a direção, ou looping do carosel de acordo com a condição//
    if (isLeft) {
      currentItem -= 1;
    } else {
      currentItem += 1;
    }

    //Realizam o looping dependendo do lado da galeria.
    if (currentItem >= maxItems) {
      currentItem = 0;
    }

    if (currentItem < 0) {
      currentItem = maxItems - 1;
    }

    //Controla a animação, removendo/adicionando o foco através da classe e caracteristicas da informação.
    items.forEach((item) => item.classList.remove("current-item"));
    items[currentItem].scrollIntoView({
      behavior: "smooth",
      inline: "center",
    });
    items[currentItem].classList.add("current-item");
  });
});

function animarTexto() {
  const textoAnimado = document.querySelector(".chamada");

  // Array com os textos que serão animados
  const textos = [
    "<span class='ad2'>Icon&nbsp;&nbsp;banner&nbsp;&nbsp;e&nbsp;&nbsp;buttons&nbsp;&nbsp;por&nbsp;&nbsp;</span><span class='ad'>R$50,00</span>",
    "<span class='ad2'>Icon&nbsp;&nbsp;banner&nbsp;&nbsp;and&nbsp;&nbsp;buttons&nbsp;&nbsp;for&nbsp;&nbsp;</span><span class='ad'>$10.00</span>",
  ];

  // Índice do texto atual na lista de textos
  let indiceAtual = 0;

  // Função que atualiza o texto animado com um fade
  function atualizarTexto() {
    textoAnimado.style.opacity = 0;
    setTimeout(function () {
      textoAnimado.innerHTML = textos[indiceAtual];
      indiceAtual = (indiceAtual + 1) % textos.length;
      textoAnimado.style.opacity = 1;
    }, 1500);
  }

  // Inicia a animação
  setInterval(atualizarTexto, 10000);
}

function animarImagem() {
  const imagemAnimada = document.querySelector(".imagemFooter");
  let isC1 = true;

  // Função que atualiza a imagem animada com um fade
  function atualizarImagem() {
    imagemAnimada.style.opacity = 0;

    setTimeout(function () {
      if (isC1) {
        imagemAnimada.src = "imgs/c2.png";
      } else {
        imagemAnimada.src = "imgs/c1.png";
      }
      isC1 = !isC1;
      imagemAnimada.style.opacity = 1;
    }, 1500);
  }

  // Inicia a animação
  setInterval(atualizarImagem, 10000);
}

animarTexto();
animarImagem();
