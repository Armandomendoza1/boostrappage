 function validar(){
        var em = document.valida.email.value;
        if ((em == "armando@gmail.com") && (document.valida.contra.value  == "1234")) {
          alert('usuario correcto');
          window.location = "mennuadmin.html";
          return false;
        } else if((em == "secre@gmail.com") && (document.valida.contra.value == "4321")){
          window.location = "menusecre.html";
          alert('usuario correcto');
          return false;
        }else{
          alert('usuario incorrecto');
        }
}

function ajax(){
      var ajaxRes = new XMLHttpRequest()
      ajaxRes.onreadystatechange = function(){
        if (ajaxRes.readyState == 4 && ajaxRes.status == 200) {
          document.getElementById("info").innerHTML=ajaxRes.responseText
        }
      }
      ajaxRes.open("GET","registro.html",true)
      //ajaxRes.open("GET","texto.txt",true)
      ajaxRes.send()
    }