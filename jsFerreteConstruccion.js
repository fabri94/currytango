/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{

}
function Circulo () 
{
	var radio;
	var circunferencia;

	radio=document.getElementById('Radio').value;
	radio=parseInt(radio);

	circunferencia=2*Math.PI*radio;

	console.log(circunferencia);
}
function Materiales () 
{
	var largo;
	var ancho;
	var bolsasCal;
	var bolsasCemento;

	largo=document.getElementById('Largo').value;
	largo=parseInt(largo);
	ancho=document.getElementById('Ancho').value;
	ancho=parseInt(ancho);

	bolsasCal=3*(largo*ancho);
	bolsasCal=parseInt(bolsasCal);
	bolsasCemento=2*(largo*ancho);
	bolsasCemento=parseInt(bolsasCemento);

	console.log("Las bolsas de cal que se necesitaran seran " +bolsasCal+  " y las de cemento seran " +bolsasCemento);
}