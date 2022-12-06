
function validacaoEmail(field) {
usuario = field.value.substring(0, field.value.indexOf("@"));
dominio = field.value.substring(field.value.indexOf("@")+ 1, field.value.length);

if ((usuario.length >=1) &&
    (dominio.length >=3) &&
    (usuario.search("@")==-1) &&
    (dominio.search("@")==-1) &&
    (usuario.search(" ")==-1) &&
    (dominio.search(" ")==-1) &&
    (dominio.search(".")!=-1) &&
    (dominio.indexOf(".") >=1)&&
    (dominio.lastIndexOf(".") < dominio.length - 1)) {
document.getElementById("msgemail").innerHTML="E-mail válido";
alert("E-mail valido");
}
else{
document.getElementById("msgemail").innerHTML="<font color='red'>E-mail inválido </font>";
alert("E-mail invalido");
}
}

// input telefone - fomatando

const formato = {

    phone (value) {

      return value

        .replace(/\D/g, '')

        .replace(/(\d{2})(\d)/, '($1)$2')

        .replace(/(\d{4})(\d)/, '$1-$2')

        .replace(/(\d{4})-(\d)(\d{4})/, '$1$2-$3')

        .replace(/(-\d{4})\d+?$/, '$1')

    }

  }



  document.querySelectorAll('input').forEach(($input) => {

    const field = $input.dataset.js

    $input.addEventListener('input', (e) => {

      e.target.value = formato[field](e.target.value)

    }, false)

  })


// validação de site

  const regex = "^(([^:/?#]+):)?(//([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?";


  var re = regex;
  var OK = re.exec(document.getElementById("url").value);




// valid password

// const password = getElementById("#password");

function validarSenha() {
  // let form = document.getElementById("#inputs");
  let senha = document.getElementById("#password");
  let confPass = document.getElementById("#password-conf");

  let caracther = "";

  if(senha.length <=6 && senha.length <=10){
    minMax = true;
  }

  if(password === "" || caracther === false){
    alert("Favor preencher o campo senha, caracteres de 6 a 10");
    senha.focus();
    return false;
  }

  if(confPass === "" || caracther === false) {
    alert("Favor preencher o campo senha, caracteres de 6 a 10");
    senha.focus();
    return false;
  }
  if(senha !== "" || confPass) {
    alert("Senhas diferentes!");
    senha.focus();
    return false;
  }

}