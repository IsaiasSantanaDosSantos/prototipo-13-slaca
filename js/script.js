/* Função para mostrar conteúdo do resumo */
function showContent() {
  let hideText = document.getElementById("hideText");
  let showText = document.getElementById("showText");

  if (hideText.style.display === "none") {
    hideText.style.display = "inline";
    showText.style.display = "none"
  } else {
    hideText.style.display = "none";
    showText.style.display = "inline"
  }
};

