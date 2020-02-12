/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var largo;
	var ancho;
	var perimetro;

	largo=document.getElementById('Largo').value;
	largo=parseInt(largo);
	ancho=document.getElementById('Ancho').value;
	ancho=parseInt(ancho);

	perimetro=[(largo+ancho)*2]*3;
	perimetro=parseInt(perimetro);

	console.log(perimetro);
}
function Circulo () 
{
	var radio;
	var circunferencia;

	radio=document.getElementById('Radio').value;
	radio=parseInt(radio);

	circunferencia=2*Math.PI*(radio);
	circunferencia=parseInt(circunferencia);

	console.log(circunferencia);
}
function Materiales () 
{
	var bolsasCemento;
	var bolsasCal;
	var largo;
	var ancho;

	ancho=document.getElementById('Ancho').value;
	ancho=parseInt(ancho);
	largo=document.getElementById('Largo').value;
	largo=parseInt(largo);

	bolsasCal=(largo*ancho)*3;
	bolsasCal=parseInt(bolsasCal);
	bolsasCemento=(largo*ancho)*2;
	bolsasCemento=parseInt(bolsasCemento);

	console.log("Se necesitaran "+bolsasCal+ " bolsas de cal y "+bolsasCemento+ " bolsas de cemento");
}