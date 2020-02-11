function mostrar()
{  
	var edad;
	edad=document.getElementById('edad').value;
	edad=parseInt(edad);
	if(edad>17)
	{
		alert("Usted no es un adolescente");
	}
	if(edad<13)
	{
		alert("Usted no es un adolescente");
	} 
}//FIN DE LA FUNCIÓN