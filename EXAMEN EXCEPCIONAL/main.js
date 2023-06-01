document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();
  
    var nombre = document.getElementById('nombre').value;
    var fecha = document.getElementById('fecha').value;
  
    // Lógica para calcular las fechas o realizar la reserva
  
    // Ejemplo de alerta con los datos de la reserva
    alert('¡Reserva realizada!\n\nNombre: ' + nombre + '\nFecha: ' + fecha);
  });
  