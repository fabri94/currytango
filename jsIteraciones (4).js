function mostrar()
{
	var numero;
	numero=prompt("ingrese un número entre 0 y 10.");
	numero=parseInt(numero);
	/*var valorDeVerdad=isNaN()  todo lo que no es un numero. me va a evaluar el conjunto de verdad*/
	while(isNaN(numero) || numero<0 || numero>10)
	{
		numero=prompt("ingrese un número entre 0 y 10.");
	}
	
	document.getElementById('Numero').value=numero;

}//FIN DE LA FUNCIÓN