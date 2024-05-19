document.getElementById('miFormulario').addEventListener('submit', function(event) {
    console.log('Formulario enviado');
    
    let nombreApellido = document.getElementById('nombreapellido').value.trim();
    let correoElectronico = document.getElementById('correoelectronico').value.trim();
    let telefono = document.getElementById('telefono').value.trim();
    let genero = document.getElementById('genero').value;
    let mensaje = document.getElementById('mensaje').value.trim();

    let nombreValido = /^[A-Za-z\s]{5,20}$/.test(nombreApellido);
    let correoValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correoElectronico);
    let telefonoValido = /^\d{10,}$/.test(telefono);

    if (!nombreApellido || !correoElectronico || !telefono || !genero || !mensaje) {
        alert('Por favor, complete todos los campos obligatorios.');
        event.preventDefault();
    } else if (!nombreValido) {
        alert('El nombre debe contener solo letras y espacios, y tener entre 5 y 20 caracteres.');
        event.preventDefault();
    } else if (!correoValido) {
        alert('Por favor, ingrese un correo electrónico válido.');
        event.preventDefault();
    } else if (!telefonoValido) {
        alert('El teléfono debe contener al menos 10 números.');
        event.preventDefault();
    } else if (mensaje.length > 1500) {
        alert('El mensaje no debe exceder los 1500 caracteres.');
        event.preventDefault();
    }
});