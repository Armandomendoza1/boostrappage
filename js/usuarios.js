function val(){
	var letras = /^[a-zA-Z]+$/;
	var l =  document.for.nombre.value;
	if (document.for.nombre.value.length == 0 || !letras.test(l)) {
		alert('Ingresa un nombre');
		document.for.nombre.focus();
		return 0;
	}
	if (document.for.sexo.selectedIndex==0){
		alert("Debe seleccionar un sexo.") 
		document.for.sexo.focus();
		return 0;
		}
	edad = document.for.edad.value; 
	edad = validarEntero(edad);
	document.for.edad.value=edad; 
	if (edad==""){
		alert("Tiene que introducir una edad.") 
		document.for.edad.focus();
		return 0;
	} else if (edad < 18) {
		alert('tienes que se mayor de edad');
		document.for.edad.focus();
		return 0;
	}
	var numeros = /^[0-9]+$/;
	var t = document.for.telefono.value; 
	var er_tlfono = /^([0-9\s\+\-])+$/; //comprueba campo teléfono de formulario //usa el método test de expresión regular
		if(!er_tlfono.test(t)||!numeros.test(t)||t.length > 10||t.length<=9) {
			alert('Campo TELEFONO no válido.');
			document.for.teléfono.focus(); 
			return 0; //no submit
		}
	if (document.for.direccion.value.length == 0) {
		alert('No has ingresado una direccion');
		document.for.direccion.focus();
		return 0;
	}
	var s = document.for.email.value;
	var filtro = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; 
		if (!filtro.test(s)) {
			alert('Introduzca un email válido'); 
			document.for.email.focus();
			return 0; 
		}
		if (document.for.pregunta.selectedIndex==0){
				alert("Debe seleccionar una pregunta.") 
				document.for.pregunta.focus();
				return 0;
			}	
	if(document.for.respuesta.value.length == 0){
		alert('tienes que ingresar una respuesta');
		document.for.respuesta.focus();
		return 0;
	}		
	if(document.for.contraseña.value.length == 0){
		alert('tienes que ingresar una contrsaeña');
		return 0;
	}
	alert('Has ingresado un nuevo usuario');
	document.for.submit();

	function validarEntero(valor){
	/* Mediante parseInt intentaremos transformar el valor a número entero. Si el dato fue ingresado bien y ya lo era, no hará nada */				valor = parseInt(valor)
					/* Se comprobará si el valor es un número */
	if (isNaN(valor)) {
	/* Si no lo es, se devuelve una cadena vacía */ return "";
	}else{
/* De lo contrario se devuelve el número */ return valor;
		}
	}
}
function cambio(elemento){
    var letras = /^[a-zA-Z]+$/;
	var l =  document.for.nombre.value;
	if (document.for.nombre.value.length == 0 || !letras.test(l)) {
		$(document.for.nombre).css("background-color", "#FA5858");
	}else{
		$(document.for.nombre).css("background-color", "#00FF40");
	}

	
}
function cambio2(elemento2){
	var letras = /^[a-zA-Z]+$/;
	var s = document.for.sexo.value;
	if (document.for.sexo.value.length == 0 || !letras.test(s)) {
		$(document.for.sexo).css("background-color", "#FA5858");
	}else if(document.for.sexo.value == "Masculino"	|| document.for.sexo.value == "Femenino"){
		$(document.for.sexo).css("background-color", "#00FF40");
	}
}
function cambio3(elemento3){
	edad = document.for.edad.value; 
	edad = validarEntero(edad);
	document.for.edad.value=edad; 
	if (edad==""){
		$(document.for.edad).css("background-color", "#FA5858");
	} else if (edad < 18) {
		$(document.for.edad).css("background-color", "#FA5858");
	}else{
		$(document.for.edad).css("background-color", "#00FF40");
	}
	function validarEntero(valor){
	/* Mediante parseInt intentaremos transformar el valor a número entero. Si el dato fue ingresado bien y ya lo era, no hará nada */				valor = parseInt(valor)
					/* Se comprobará si el valor es un número */
	if (isNaN(valor)) {
	/* Si no lo es, se devuelve una cadena vacía */ return "";
	}else{
/* De lo contrario se devuelve el número */ return valor;
		}
	}
}
function cambio4(elemento4){
		var numeros = /^[0-9]+$/;
	var t = document.for.telefono.value; 
	var er_tlfono = /^([0-9\s\+\-])+$/; //comprueba campo teléfono de formulario //usa el método test de expresión regular
		if(!er_tlfono.test(t)||!numeros.test(t)||t.length > 10||t.length<=9) {
			$(document.for.telefono).css("background-color", "#FA5858");
		}else{
			$(document.for.telefono).css("background-color", "#00FF40");
		}
	}
function cambio5(elemento5){
	if (document.for.direccion.value.length == 0) {
		$(document.for.direccion).css("background-color", "#FA5858");
		}else{
			$(document.for.direccion).css("background-color", "#00FF40");
		}
}
function cambio6(elemento6){
	var s = document.for.email.value;
	var filtro = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; 
		if (!filtro.test(s)) {
			$(document.for.email).css("background-color", "#FA5858");
		}else{
			$(document.for.email).css("background-color", "#00FF40");
		}
}
function cambio7(elemento7){
	if(document.for.respuesta.value.length == 0){
		$(document.for.respuesta).css("background-color", "#FA5858");
		}else{
			$(document.for.respuesta).css("background-color", "#00FF40");
		}
}
function cambio8(){
	if(document.for.contraseña.value.length == 0){
		$(document.for.contraseña).css("background-color", "#FA5858");
		}else{
			$(document.for.contraseña).css("background-color", "#00FF40");
		}
}
function buscar(){
	codigo = document.bus.codigo.value; 
	codigo = validarEntero(codigo);
	document.bus.codigo.value=codigo; 
	if (codigo==""){
		alert("Tiene que introducir un codigo bara buscar") 
		document.bus.codigo.focus();
		return 0;
	}
	function validarEntero(valor){
	/* Mediante parseInt intentaremos transformar el valor a número entero. Si el dato fue ingresado bien y ya lo era, no hará nada */				valor = parseInt(valor)
					/* Se comprobará si el valor es un número */
	if (isNaN(valor)) {
	/* Si no lo es, se devuelve una cadena vacía */ return "";
	}else{
/* De lo contrario se devuelve el número */ return valor;
		}
	}

	alert("Elemento buscado"); 
	document.bus.submit();
}
function cambiobuscar(elemento){
	codigo = document.bus.codigo.value; 
	codigo = validarEntero(codigo);
	document.bus.codigo.value=codigo; 
	if (codigo==""){
		$(document.bus.codigo).css("background-color","#FA5858");
	}else{
		$(document.bus.codigo).css("background-color","#00FF40");
	}
	function validarEntero(valor){
	/* Mediante parseInt intentaremos transformar el valor a número entero. Si el dato fue ingresado bien y ya lo era, no hará nada */				valor = parseInt(valor)
					/* Se comprobará si el valor es un número */
	if (isNaN(valor)) {
	/* Si no lo es, se devuelve una cadena vacía */ return "";
	}else{
/* De lo contrario se devuelve el número */ return valor;
		}
	}
}
function modificar(){
	codigo = document.bus.codigo.value; 
	codigo = validarEntero(codigo);
	document.bus.codigo.value=codigo; 
	if(codigo == ""){
		alert("Tiene que introducir un codigo para modificar") 
		document.bus.codigo.focus();
		return 0;
	}
	function validarEntero(valor){
	/* Mediante parseInt intentaremos transformar el valor a número entero. Si el dato fue ingresado bien y ya lo era, no hará nada */				valor = parseInt(valor)
					/* Se comprobará si el valor es un número */
	if (isNaN(valor)) {
	/* Si no lo es, se devuelve una cadena vacía */ return "";
	}else{
/* De lo contrario se devuelve el número */ return valor;
		}
	}

	alert("Elemento modificado"); 
	document.bus.submit();
}

function eliminar(){
	codigo = document.bus.codigo.value; 
	codigo = validarEntero(codigo);
	document.bus.codigo.value=codigo; 
	if(codigo == ""){
		alert("Tiene que introducir un codigo para eliminar") 
		document.bus.codigo.focus();
		return 0;
	}
	function validarEntero(valor){
	/* Mediante parseInt intentaremos transformar el valor a número entero. Si el dato fue ingresado bien y ya lo era, no hará nada */				valor = parseInt(valor)
					/* Se comprobará si el valor es un número */
	if (isNaN(valor)) {
	/* Si no lo es, se devuelve una cadena vacía */ return "";
	}else{
/* De lo contrario se devuelve el número */ return valor;
		}
	}

	alert("Elemento eliminado"); 
	document.bus.submit();
}
function bnombre(){
	if(document.busc.nombre.value.length == 0){
		alert('tienes que ingresar un producto para buscar');
		document.busc.nombre.focus();
		return 0;
	}
	alert("elemento buscado");
	document.busc.submit();
}
function bnombremo(elemento){
	if(document.busc.nombre.value.length == 0){
		$(document.busc.nombre).css("background-color","#FA5858");
	}else{
		$(document.busc.nombre).css("background-color","#00FF40");
	}
}
