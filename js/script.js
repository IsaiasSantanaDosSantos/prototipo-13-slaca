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
  let confirmShipping = document.getElementById("confirm-shipping");

  startDiscussion.style.display = "none";
  form.style.display = "block";
  confirmShipping.style.display = "none";
}

/* Inviar pergunta */

function sendPost() {
  let form = document.getElementById("form-message");
  let confirmShipping = document.getElementById("confirm-shipping");

  form.style.display = "none";
  confirmShipping.style.display = "block";
}

/* Mostrar comentario */

function showComments() {
  let showAndHideComments = document.getElementById("hidden-comments");

  if (showAndHideComments.style.display === "none") {
    showAndHideComments.style.display = "block";
  } else {
    showAndHideComments.style.display = "none"
  }
}
