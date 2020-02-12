function mostrar()
{

	var edad;
	var estadoCivil;

	edad=document.getElementById('edad').value;
	edad=parseInt(edad);
	estadoCivil=document.getElementById('estadoCivil').value;

		if(edad<18&&estadoCivil!="Soltero")
			{
				alert("Es muy pequeño para NO ser soltero.");
			}
		else
			{
				alert("Usted tiene " +edad+ " años y su estado civil es " +estadoCivil);
			}
} 