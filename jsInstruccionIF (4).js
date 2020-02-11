function mostrar()
{
	var edad;
	edad=document.getElementById('edad').value;
	edad=parseInt(edad);
	if(edad<18 && edad>12)
	{
		alert("adolescente");
	} 
}//FIN DE LA FUNCIÓN
