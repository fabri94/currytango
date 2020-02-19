function mostrar()
{

	var contador;
	contador=0;
	var positivo;
	positivo=0;
	var negativo;
	negativo=1;
	var numeroIngresado;
	var respuesta;
	respuesta='si';
	var suma;
	var multiplicacion;

	while(respuesta==si)
	{
		numeroIngresado=prompt("Ingrese su numero por favor");
		numeroIngresado=parseInt(numeroIngresado);
		contador=contador+1;
		suma=positivo+contador;
		multiplicacion=negativo*contador;
		respuesta=prompt("Ingrese 'si' o de lo contrario sale");		
	}


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN