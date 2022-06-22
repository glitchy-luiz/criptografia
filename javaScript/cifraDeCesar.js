const caracteres = ["1","2","3","4","5","6","7","8","9","0","¹","²","³","£","¢","¬","§","ª","º","°","!","@","#","$","%","¨","&","*","(",")","_","+","=","-","´","`","'","[","{","]","}","^","/",`<`,`>`,"?","A","Ã","Â","Á","À","Ä","a","á","ã","â","à","ä","B","b","C","c","Ç","ç","D","d","E","Ê","É","È","Ë","e","ê","é","è","ë","F","f","G","g","H","h","I","Í","Ì","Ï","i","î","í","ì","ï","J","j","K","k","L","l","M","m","N","Ñ","n","ñ","O","Õ","Ô","Ó","Ò","Ö","o","õ","ô","ó","ò","ö","P","p","Q","q","R","r","S","s","T","t","U","Û","Ú","Ù","Ü","u","û","ú","ù","ü","V","v","W","w","X","x","Y","Ý","y","ý","ÿ","Z","z"]

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
