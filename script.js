document.getElementById('miFormulario').addEventListener('submit', function(event) {
    console.log('Formulario enviado'); // Agregar esta línea
    let nombreApellido = document.getElementById('nombreapellido').value;
    let correoElectronico = document.getElementById('correoelectronico').value;
    let telefono = document.getElementById('telefono').value;
    let mensaje = document.getElementById('mensaje').value;

    if (!nombreApellido || !correoElectronico || !telefono || !mensaje) {
        alert('Por favor, complete todos los campos obligatorios.');
        event.preventDefault(); 
    }
});