const botao = document.querySelector(".btn-plataforma");
const elementoPlataformas = document.querySelector(".btn-plataforma .plataformas");
const contadorDrop = document.querySelector("#contador-drop");

if (botao && elementoPlataformas) {
  botao.addEventListener("click", () => {
    elementoPlataformas.classList.toggle("ativo");
  });
}

if (contadorDrop) {
  const dataDrop = new Date("2026-03-20T12:00:00-03:00");

  const atualizarContagem = () => {
    const agora = new Date();
    const diferenca = dataDrop.getTime() - agora.getTime();

    if (diferenca <= 0) {
      contadorDrop.textContent = "DISPONÍVEL";
      return;
    }

    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);

    contadorDrop.textContent = `${dias}d ${horas}h`;
  };

  atualizarContagem();
  setInterval(atualizarContagem, 60 * 1000);
}
