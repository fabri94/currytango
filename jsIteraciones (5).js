function mostrar()
{

	var sexo; 
	sexo=prompt("Ingrese Femenino ó Masculino.");

	while(sexo!="F" && sexo!="M")
	{
		sexo=prompt("Ingrese F o M");		
	}

	document.getElementById('Sexo').value=sexo;
}