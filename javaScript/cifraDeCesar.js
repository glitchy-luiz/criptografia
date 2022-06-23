const caracteres = ['à', 'ä', 'd', '#', '3', '}', '-', '/', 'A','^', 'Á', 'Â', '<', 'C', 'c', 'ã', 'â', '°','¨', 'ç', 'a', '%', 'D', 'Ä', ')', '!', '8','@', 'b', '>', '(', '=', '2', '9', 'ª', 'á',`"`, '¬', '²', '_', '´', '`', 'B', '¹', '1','4', '?', '$', '5', 'Ã', '6', 'º', '³', ']','¢', '0', '&', 'Ç', '7', '[', '£', '*', 'À', '+', '{', '§','X', 'Û', 'x', 'V', 'ÿ', 'P', 'ö', 'S', 'Ò', 'Ù','Ý', 'Q', 'm', 'ï', 'É', 'È', 'f', 'F', 'ñ', 'Ë', 'J', 't', 'Ú', 'Ó', 'ù', 'Ï', 'é', 'ü', 's', 'u','M', 'j', 'p', 'R', 'Ü', 'û', 'K', 'Ö', 'v', 'N','n', 'í', 'k', 'G', 'o', 'q', 'ì', 'õ', 'T', 'Ê','ô', 'g', 'Ì', 'e', 'Z', 'Õ', 'Ñ', 'h', 'ê', 'ý','H', 'ò', 'ú', 'i', 'y', 'ó', 'L', 'w', 'E', 'I','l', 'Y', 'O', 'Í', 'Ô', 'î', 'ë', 'U', 'r', 'z','è', 'W']
var resposta = document.querySelector(".resposta");

function codificarCifra(mensagem, chave) {
  mensagem = mensagem.split("");
  chave = parseInt(chave, 10);
  var codigo = "";
  for (var i = 0; i < mensagem.length; i++) {
    var charCode = mensagem[i].charCodeAt();
    if (charCode >= 65 && charCode <= 214) {
      codigo += String.fromCharCode(((charCode + chave - 65) % caracteres.length) + 65);
    } else if (charCode >= 97 && charCode <= 239) {
      codigo += String.fromCharCode(((charCode + chave - 97) % caracteres.length) + 97);
    } else {
      codigo += mensagem[i];
    }
  }
  resposta.innerText = codigo;
}
function decodificarCifra(mensagem, chave) {
  mensagem = mensagem.split("");
  chave = parseInt(chave, 10);
  var codigo = "";
  for (var i = 0; i < mensagem.length; i++) {
    var charCode = mensagem[i].charCodeAt();
    if (charCode >= 65 && charCode <= 214) {
      codigo += String.fromCharCode(((charCode - chave - 90) % caracteres.length) + 90);
    } else if (charCode >= 97 && charCode <= 239) {
      codigo += String.fromCharCode(((charCode - chave - 122) % caracteres.length) + 122);
    } else {
      codigo += mensagem[i];
    }
  }
  resposta.innerText = codigo;
}
