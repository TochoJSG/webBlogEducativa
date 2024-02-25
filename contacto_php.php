<!--PHP enviarlo al correo por php cual página llamaremos ‘contacto.php’ :-->
	<?php 
		@$nombre = $_POST['nombre']; 
		@$asunto = $_POST['asunto']; 
		@$mensaje = $_POST['mensaje'];
		
		if (@mail('jjorgess081@gmail.com',$asunto ,$mensaje ))//Si el mensaje se envía muestra una confirmación 
			die("Muchas gracias por contactarnos, su mensaje fue enviado correctamente"); 
			}else{ //Si el mensaje no se envía muestra el mensaje de error 
				die("Ups, hubo un problema y no se pudo enviar su mensaje, por favor intente más tarde"); 
				}
	?>