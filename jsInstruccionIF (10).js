function mostrar()
{	
	var numeroRandom;
	numeroRandom=Math.floor(Math.random()*10)+1;
	console.log(numeroRandom);

	if(numeroRandom>=4)
	{
		if(numeroRandom>8)
		{
			console.log("EXCELENTE");
		}
		else
		{
			console.log("APROBÓ");
		}
	}
	else
	{
		console.log("VAMOS, LA PRÓXIMA SE PUEDE");
	}
}/*	
	if(numeroRandom>8)
	{
		console.log("EXCELENTE");
	}
	else
	{
		if(numeroRandom<4)
		{
			console.log("VAMOS, LA PRÓXIMA SE PUEDE");
		}
		else
		{
			console.log("APROBÓ");
		}
	}
}/*