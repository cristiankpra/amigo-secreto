// Inicializar arreglo para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo
function agregarAmigo() {
    let inputAmigo = document.getElementById('amigo');
    let listaAmigos = document.getElementById('listaAmigos');
    let nombre = inputAmigo.value.trim();

    // Verificar que no sea vacío
    if (nombre) {
        // Agregar nombre al arreglo
        amigos.push(nombre);

        // Crear un elemento de lista y agregarlo al DOM
        let li = document.createElement('li');
        li.textContent = nombre;
        listaAmigos.appendChild(li);

        // Limpiar el input
        inputAmigo.value = '';
    } else {
        alert('Por favor, ingresa un nombre válido.');
    }
}

// Función para sortear un amigo
function sortearAmigo() {
    let resultado = document.getElementById('resultado');

    // Verificar que haya al menos un amigo
    if (amigos.length > 0) {
        // Limpiar el resultado previo
        resultado.innerHTML = '';

        // Elegir un amigo al azar usando while
        let indiceAleatorio;
        while (true) {
            indiceAleatorio = Math.floor(Math.random() * amigos.length);
            if (indiceAleatorio >= 0 && indiceAleatorio < amigos.length) {
                break;
            }
        }

        let amigoElegido = amigos[indiceAleatorio];

        // Mostrar el amigo elegido
        let li = document.createElement('li');
        li.textContent = `¡El amigo asignado es: ${amigoElegido}! 🎉`;
        resultado.appendChild(li);
    } else {
        alert('Por favor, añade al menos un amigo antes de sortear.');
    }
}
