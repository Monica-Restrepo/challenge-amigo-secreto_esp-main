let amigos = [];

/**
 * Función para agregar un amigo a la lista.
 */
function agregarAmigo() {
    // Capturar el valor del campo de entrada
    const input = document.getElementById('nombreInput');
    const nombre = input.value.trim(); // Elimina espacios en blanco al inicio y al final

    // Referencia al elemento donde se mostrarán los mensajes de error
    const mensaje = document.getElementById('mensaje');

    // Validar la entrada
    if (nombre === "") {
        mensaje.textContent = "Por favor, inserte un nombre.";
        return; // Salir de la función si el nombre está vacío
    }

    // Actualizar el array de amigos
    amigos.push(nombre);

    // Actualizar la lista en el DOM
    actualizarLista();

    // Limpiar el campo de entrada y el mensaje de error
    input.value = "";
    mensaje.textContent = "";
}

/**
 * Función para actualizar la lista de amigos en el HTML.
 */
function actualizarLista() {
    const lista = document.getElementById('amigosList');
    
    // Limpiar la lista actual
    lista.innerHTML = "";

    // Recorrer el array de amigos y crear elementos de lista
    amigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.textContent = amigo;

        // Opcional: Añadir un botón para eliminar amigos
        const btnEliminar = document.createElement('button');
        btnEliminar.textContent = "Eliminar";
        btnEliminar.style.marginLeft = "10px";
        btnEliminar.onclick = function() {
            eliminarAmigo(index);
        };

        li.appendChild(btnEliminar);
        lista.appendChild(li);
    });
}

/**
 * Función para eliminar un amigo de la lista por su índice.
 * @param {number} index - Índice del amigo en el array.
 */
function eliminarAmigo(index) {
    amigos.splice(index, 1); // Eliminar del array
    actualizarLista(); // Actualizar la lista en el DOM
}

// Añadir un listener al botón para ejecutar la función al hacer clic
document.getElementById('agregarBtn').addEventListener('click', agregarAmigo);

// Permitir agregar amigos al presionar "Enter" en el campo de texto
document.getElementById('nombreInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        agregarAmigo();
    }
});