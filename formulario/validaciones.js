

function enviarform(event){
  event.preventDefault();
  let formulario = document.getElementById('formulario');
  let nomb = formulario.elements['nombre'].value;
 
  if(nomb.length < 6){
      alert("El nombre debe tener al menos 6 letras")
    } else{
      alert("Datos enviados correctamente");
      formulario.elements['nombre'].value = "";
      formulario.elements['apellido'].value = "";
      formulario.elements['telefono'].value = "";
      formulario.elements['comentario'].value = "";

    }
   

}




