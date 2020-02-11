function mostrar()
{
	var edad;
	edad=document.getElementById('edad').value;
	edad=parseInt(edad);
	if(edad>17)
	{
		alert("Usted es mayor de edad");
	}
	else
	{	if(edad<13)
		{
			alert("Usted es un niño");
		}
		else	 
		{
			alert("Usted es un adolescente");
		}
	}
}			
//FIN DE LA FUNCIÓN otras formas de escribir seria:
/* if(edad>18)
	{
		alert("Usted es mayor de edad");
	}
	if(edad<13)
	{
		alert("Usted es un niño");
	}
	if(edad<18&&edad>12) 
	{
		alert("Usted es un adolescente");
	} 

	pero consume demasiado procesador (un minimo de 3 y un maximo de 4 usos)*/