function ventafor(){
	codigo = document.formu.codigo.value; 
	codigo = validarEntero(codigo);
	document.formu.codigo.value=codigo; 
	if (codigo==""){
		alert("Tiene que introducir un codigo.") 
		document.formu.codigo.focus();
		return 0;
	}
	if (document.formu.categoria.selectedIndex==0){
				alert("Debe seleccionar una categoria.") 
				document.formu.categoria.focus();
				return 0;
			}
	if (document.formu.productos.selectedIndex==0){
				alert("Debe seleccionar un producto.") 
				document.formu.productos.focus();
				return 0;
			}
	cantidad = document.formu.cantidad.value;
	cantidad = validarEntero(cantidad);
	document.formu.cantidad.value = cantidad;
	if(cantidad == ""){
		alert('tienes que agregar una cantidad');
	    document.formu.cantidad.focus();
	    return 0;	
	}
	if (document.formu.total.value.length == 0) {
		alert('No has ingresado un total');
		document.formu.total.focus();
		return 0;
	}else{
		var s = document.formu.total.value;
				var filtro = /^\d*\.?\d*$/; 
				if (!filtro.test(s)) {
				alert('Introduszca un total'); 
				document.formu.total.focus();
				return 0; 
			}
	}
	alert("Has ingresado una nueva venta"); 
	document.formu.submit();			

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
function ventase(){
	codigo = document.formu.codigo.value; 
	codigo = validarEntero(codigo);
	document.formu.codigo.value=codigo; 
	if (codigo==""){
		alert("Tiene que introducir un codigo.") 
		document.formu.codigo.focus();
		return 0;
	}
	if (document.formu.categoria.selectedIndex==0){
				alert("Debe seleccionar una categoria.") 
				document.formu.categoria.focus();
				return 0;
			}
	if (document.formu.productos.selectedIndex==0){
				alert("Debe seleccionar un producto.") 
				document.formu.productos.focus();
				return 0;
			}
	cantidad = document.formu.cantidad.value;
	cantidad = validarEntero(cantidad);
	document.formu.cantidad.value = cantidad;
	if(cantidad == ""){
		alert('tienes que agregar una cantidad');
	    document.formu.cantidad.focus();
	    return 0;	
	}
	if (document.formu.total.value.length == 0) {
		alert('No has ingresado un total');
		document.formu.total.focus();
		return 0;
	}else{
		var s = document.formu.total.value;
				var filtro = /^\d*\.?\d*$/; 
				if (!filtro.test(s)) {
				alert('Introduszca un total'); 
				document.formu.total.focus();
				return 0; 
			}
	}
	alert("Has ingresado una nueva venta"); 
	document.formu.submit();			

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
	var numeros = /^[0-9]+$/;
	var n = document.formu.codigo.value;
	codigo = document.formu.codigo.value; 
	codigo = validarEntero(codigo);
	document.formu.codigo.value=codigo; 
	if (codigo==""){
		$(document.formu.codigo).css("background-color", "#FA5858");
		}else{
			$(document.formu.codigo).css("background-color", "#00FF40");
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
function cambio1(elemento){
	var numeros = /^[0-9]+$/;
	var n = document.formu.cantidad.value;
	cantidad = document.formu.cantidad.value;
	cantidad = validarEntero(cantidad);
	document.formu.cantidad.value = cantidad;
	if(cantidad == ""){
		$(document.formu.cantidad).css("background-color", "#FA5858");
		}else{
			$(document.formu.cantidad).css("background-color", "#00FF40");
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
function cambio2(elemento){
	if (document.formu.total.value.length == 0) {
		$(document.formu.total).css("background-color", "#FA5858");
	}else{
		var numeros = /^[0-9]+$/;
		var n = document.formu.total.value;
		var s = document.formu.total.value;
		var filtro = /^\d*\.?\d*$/; 
		if (!filtro.test(s)) {
			$(document.formu.total).css("background-color", "#FA5858");
		}
		else{
			$(document.formu.total).css("background-color", "#00FF40");
		}
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