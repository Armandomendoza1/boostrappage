function valpro(){
	if(document.valprod.producto.value.length == 0){
		alert("tienes que ingresar un producto");
		document.valprod.producto.focus();
		return 0;
	}
	if (document.valprod.categoria.value.length == 0) {
		alert("tienes que agregar una categoria");
		document.valprod.categoria.focus();
		return 0;
	}
	cantidad = document.valprod.Cantidad.value; 
	cantidad = validarEntero(cantidad);
	document.valprod.Cantidad.value=cantidad; 
	if (cantidad==""){
		alert("Tiene que introducir un número entero en la cantidad.") 
		document.valprod.Cantidad.focus();
		return 0;
	}
	if (document.valprod.precio.value.length == 0) {
		alert('No has ingresado un precio');
		document.valprod.precio.focus();
		return 0;
	}else{
		var s = document.valprod.precio.value;
				var filtro = /^\d*\.?\d*$/; 
				if (!filtro.test(s)) {
				alert('Introduzca un precio válido'); 
				document.valprod.precio.focus();
				return 0; 
			}
	}
	if(document.valprod.text.value.length == 0){
		alert('tienes que ingresar una descripcion');
		document.valprod.text.focus();
		return 0;
	}
	alert("Has ingresado un nuevo producto"); 
	document.valprod.submit();


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
function valpro2(){
	if(document.valprod.producto.value.length == 0){
		alert("tienes que ingresar un producto");
		document.valprod.producto.focus();
		return 0;
	}
	if (document.valprod.categoria.value.length == 0) {
		alert("tienes que agregar una categoria");
		document.valprod.categoria.focus();
		return 0;
	}
	cantidad = document.valprod.Cantidad.value; 
	cantidad = validarEntero(cantidad);
	document.valprod.Cantidad.value=cantidad; 
	if (cantidad==""){
		alert("Tiene que introducir un número entero en la cantidad.") 
		document.valprod.Cantidad.focus();
		return 0;
	}
	if (document.valprod.precio.value.length == 0) {
		alert('No has ingresado un precio');
		document.valprod.precio.focus();
		return 0;
	}else{
		var s = document.valprod.precio.value;
				var filtro = /^\d*\.?\d*$/; 
				if (!filtro.test(s)) {
				alert('Introduzca un precio válido'); 
				document.valprod.precio.focus();
				return 0; 
			}
	}
	if(document.valprod.text.value.length == 0){
		alert('tienes que ingresar una descripcion');
		document.valprod.text.focus();
		return 0;
	}
	alert("Has ingresado un nuevo producto"); 
	document.valprod.submit();


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
	if(document.valprod.producto.value.length == 0){
		$(document.valprod.producto).css("background-color","#FA5858");
	}else{
		$(document.valprod.producto).css("background-color","#00FF40");
	}
}
function cambio1(elemento){
	if (document.valprod.categoria.value.length == 0) {
		$(document.valprod.categoria).css("background-color","#FA5858");
	}else{
		$(document.valprod.categoria).css("background-color","#00FF40");
	}
}
function cambio2(elemento){
	cantidad = document.valprod.Cantidad.value; 
	cantidad = validarEntero(cantidad);
	document.valprod.Cantidad.value=cantidad; 
	if (cantidad==""){
		$(document.valprod.Cantidad).css("background-color","#FA5858");
	}else{
		$(document.valprod.Cantidad).css("background-color","#00FF40");
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
function cambio3(elemento){
	if (document.valprod.precio.value.length == 0) {
		$(document.valprod.precio).css("background-color","#FA5858");
	}else{
		var s = document.valprod.precio.value;
				var filtro = /^\d*\.?\d*$/; 
				if (!filtro.test(s)) {
					$(document.valprod.precio).css("background-color","#FA5858");
				}else{
					$(document.valprod.precio).css("background-color","#00FF40");
				}
	}
}
function cambio4(elemento){
	if(document.valprod.text.value.length == 0){
		$(document.valprod.text).css("background-color","#FA5858");
	}else{
		$(document.valprod.text).css("background-color","#00FF40");
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