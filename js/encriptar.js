var si = "";
var no = "none";

function resultado(ver){
  document.getElementById("container-resultado").style.display = ver;  
  document.getElementById("boton-copiar").style.display = ver;
  document.getElementById("resultado").style.display = ver;
}

document.getElementById("toy").style.display = "";

resultado(no);

function desencriptar() {
  document.getElementById("toy").style.display = "none";
  var texto = document.querySelector("#introducir-texto").value;
  texto = texto
      .replace(/enter/gi, "e")
      .replace(/imes/gi, "i")
      .replace(/ai/gi, "a")
      .replace(/ober/gi, "o")
      .replace(/ufat/gi, "u");
  document.getElementById("resultado").innerHTML=texto;
 /* document.getElementById("titulo-resultado").innerHTML=texto;*/
 /* document.getElementById("introducir-texto").value = ""*/
  resultado(si)
}

var boton = document.getElementById("boton-2");
boton.onclick = function () {
  if(document.getElementById("introducir-texto").value.match(/^[a-z ]*$/)) {
      desencriptar();
  } else {
      alert("Solo se permiten letras minusculas, sin caracteres especiales.")
  }
};

function encriptar() {
  var texto = document.querySelector("#introducir-texto").value;
  document.getElementById("toy").style.display = "none";
  texto = texto
      .replace(/e/gi, "enter")
      .replace(/i/gi, "imes")
      .replace(/a/gi, "ai")
      .replace(/o/gi, "ober")
      .replace(/u/gi, "ufat");
    document.getElementById("resultado").innerHTML=texto;
   /* document.getElementById("titulo-resultado").innerHTML=texto;*/
    /*document.getElementById("introducir-texto").value = ""*/
    resultado(si)
}
var boton = document.getElementById("boton-1");
boton.onclick = function () {    
  if(document.getElementById("introducir-texto").value.match(/^[a-z ]*$/)) {
      encriptar();
  } else {
      alert("Solo se permiten letras minusculas, sin caracteres especiales.")
  }
};

var botonCopiar = document.querySelector("#boton-copiar");

function copiarPortapapeles(){
  var copiado = document.getElementById("resultado");
  copiado.select();
  document.execCommand('copy');  

}

botonCopiar.onclick = copiarPortapapeles;
