function mostrar()
{

	var contador; 
	contador=0;
	var acumulador;
	acumulador=0;
	var numeroIngresado;
	var respuesta;
	respuesta="si";

	while(respuesta=="si")
	{
		numeroIngresado=prompt("Ingrese su numero por favor");
		numeroIngresado=parseInt(numeroIngresado);
		acumulador=acumulador+numeroIngresado;
		contador=contador+1;
		respuesta=prompt("Ingrese 'si' o de lo contrario sale");
	}

	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN