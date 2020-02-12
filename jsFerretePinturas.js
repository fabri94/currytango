/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var temperaturaFahrenheit;
	var temperaturaCelsius;

	temperaturaFahrenheit=document.getElementById('Temperatura').value;
	temperaturaFahrenheit=parseInt(temperaturaFahrenheit);
	temperaturaCelsius=(temperaturaFahrenheit - 32)*(5/9);
	temperaturaCelsius=parseInt(temperaturaCelsius);

	console.log(temperaturaFahrenheit +" grados Fahrenheit son " +temperaturaCelsius+ " grados centígrados");
}

function CentigradosFahrenheit () 
{
	var temperaturaFahrenheit;
	var temperaturaCelsius;

	temperaturaCelsius=document.getElementById('Temperatura').value;
	temperaturaCelsius=parseInt(temperaturaCelsius);
	temperaturaFahrenheit=(temperaturaCelsius)*9/5 + 32;
	temperaturaFahrenheit=parseInt(temperaturaFahrenheit);

	console.log(temperaturaCelsius +" grados centígrados son " +temperaturaFahrenheit+ " grados Fahrenheit");
}
