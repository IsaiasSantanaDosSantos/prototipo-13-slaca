/* Função para mostrar conteúdo do resumo */
function showContent() {
  let hideText = document.getElementById("hideText");
  let showText = document.getElementById("showText");

  if (hideText.style.display === "none") {
    hideText.style.display = "inline";
    showText.style.display = "none";
  } else {
    hideText.style.display = "none";
    showText.style.display = "inline";
  }
}

/* Interação do formulário */

function createTopic() {
  let startDiscussion = document.getElementById("sharing-session");
  let form = document.getElementById("form-message");
  
  startDiscussion.style.display = "none";
  form.style.display = "block";
}
