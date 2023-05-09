
function validateForm(event) {
    event.preventDefault(); // previene el envío del formulario

    // Obtener valores de los campos del formulario
    const nombre = document.getElementById("nombre").value;

    // Validar el campo nombre (debe tener más de 3 letras)
    if (nombre.length <= 3) {
      alert("El campo nombre debe tener más de 3 letras.");
      return false;
    }

    // Si se llega a este punto, el formulario es válido y se puede enviar
    document.getElementById("myForm").submit();
  }

