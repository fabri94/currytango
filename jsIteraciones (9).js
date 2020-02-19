function mostrar()
{

	var contador=0;
	var maximo;
	var minimo;	
	var respuesta='si';

	while(respuesta!='no')
	{	
		contador=contador+1;
		numeroIngresado=prompt("Ingrese numero");
		numeroIngresado=parseInt(numeroIngresado); //siempre va a estar por debajo de un prompt o un document.get...//
		
		if(contador==1)
		{
			maximo=numeroIngresado;
			minimo=numeroIngresado;
		}else
		{
			if(numeroIngresado>maximo)
			{
				maximo=numeroIngresado;
			}
			if(numeroIngresado<minimo)
			{
				minimo=numeroIngresado;
			}
		}
		respuesta=prompt("Ingrese 'no', para salir.");
	

	document.getElementById('maximo').value=maximo;
	document.getElementById('minimo').value=minimo;
	}




}//FIN DE LA FUNCIÓN