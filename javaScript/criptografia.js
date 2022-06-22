var metodo = document.querySelector(".metodo");
var passo = document.querySelector(".passo");
var enviar = document.querySelector(".enviar");
var tipoRadio = document.forms[0].coddecod;
var tipo = document.querySelector(".tipo");
var chave = document.getElementById("chave").value;
var entrada = document.querySelector("#entrada");



tipo.addEventListener("change", function () {
  if (tipoRadio[0].checked) {
    enviar.textContent = "Codificar Mensagem!";
  } else {
    enviar.textContent = "Decodificar Mensagem!";
  }
});

passo.addEventListener("change", function () {
  chave = document.getElementById("chave").value;
});

enviar.addEventListener("click", function (e) {
  e.preventDefault();
  var mensagem = entrada.value;
    if (tipoRadio[0].checked) {
      codificarCifra(mensagem, chave);
    } else {
      decodificarCifra(mensagem, chave);
    }
});

