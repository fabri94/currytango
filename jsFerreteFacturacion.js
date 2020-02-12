/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var precioPintura;
	var precioSolvente;
	var precioTornillos;
	var precioFinal;

	precioPintura=document.getElementById('PrecioUno').value;
	precioPintura=parseInt(precioPintura);
	precioSolvente=document.getElementById('PrecioDos').value;
	precioSolvente=parseInt(precioSolvente);
	precioTornillos=document.getElementById('PrecioTres').value;
	precioTornillos=parseInt(precioTornillos);

	precioFinal=precioPintura+precioTornillos+precioSolvente;
	precioFinal=parseInt(precioFinal);

	console.log(precioFinal);
}
function Promedio () 
{
	var costoUno;
	var costoDos;
	var costoTres;
	var promedio;

	costoUno=document.getElementById('PrecioUno').value;
	costoUno=parseInt(costoUno);
	costoDos=document.getElementById('PrecioDos').value;
	costoDos=parseInt(costoDos);
	costoTres=document.getElementById('PrecioTres').value;
	costoTres=parseInt(costoTres);

	promedio=(costoUno+costoDos+costoTres)/3;
	promedio=parseInt(promedio);

	console.log(promedio);

}
function PrecioFinal () 
{
	var costoUno;
	var	costoDos;
	var	costoTres;
	var costoFinal;

	costoUno=document.getElementById('PrecioUno').value;
	costoUno=parseInt(costoUno);
	costoDos=document.getElementById('PrecioDos').value;
	costoDos=parseInt(costoDos);
	costoTres=document.getElementById('PrecioTres').value;
	costoTres=parseInt(costoTres);

	costoFinal=(costoUno+costoUno*21/100)+(costoDos+costoDos*21/100)+(costoTres+costoTres*21/100);
	costoFinal=parseInt(costoFinal);

	console.log(costoFinal);
}