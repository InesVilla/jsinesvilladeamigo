const NOMBRE_DEL_EVENTO = "Evento Interactivo";

// array de invitados
let invitados = ["Juan", "María", "Carlos", "Ana"];

// Mostrar información 
console.log(`¡Bienvenido al ${NOMBRE_DEL_EVENTO}!`);

// Iterar sobre el array 
for (let i = 0; i < invitados.length; i++) {
    // Verificar si el invitado confirmó su asistencia
    let confirmacion = confirm(`¿${invitados[i]}, confirmas tu asistencia al ${NOMBRE_DEL_EVENTO}?`);

    
    if (confirmacion) {
        console.log(`${invitados[i]} asistirá al ${NOMBRE_DEL_EVENTO}.`);
    } else {
        console.log(`${invitados[i]} no podrá asistir al ${NOMBRE_DEL_EVENTO}.`);
    }
}

// Verificar el número de invitados que confirmaron asistencia
if (invitados.length > 0) {
    alert(`¡Gracias por confirmar tu asistencia al ${NOMBRE_DEL_EVENTO}!`);
} else {
    alert(`Lamentablemente, nadie podrá asistir al ${NOMBRE_DEL_EVENTO}.`);
}