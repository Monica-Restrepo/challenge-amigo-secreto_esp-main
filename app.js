// Array para almacenar los nombres de amigos
let amigos = [];

// Función para agregar un amigo a la lista

function agregarAmigo(){
    const inputAmigo = document.getElementById("amigo");
    const nombre = inputAmigo.value.trim();

    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }
   // Actualizar el array de amigos
   amigos.push(nombre);
   
   // Limpiar el campo de entrada
   inputAmigo.value = "";

   // Actualizar la lista en el DOM
   actualizarLista();
}

// Función para actualizar la lista de amigos
function actualizarLista(){
    const lista = document.getElementById('listaAmigos');
    
    // Limpiar la lista actual
    lista.innerHTML = "";

    // Recorrer el array de amigos y crear elementos de lista
    amigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });     
}

// Funcion para sortear amigos
function sortearAmigo() {
    // Elemento donde se mostrará el resultado
    const resultado = document.getElementById('resultado');

    if (amigos.length === 0){
        alert("No hay amigos en la lista para sortear.");
        resultado.innerHTML = ""; 
        return;
    }

    // Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener el nombre sorteado
    const amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado en el elemento 'resultado'
    resultado.innerHTML = `<li>¡El amigo secreto sorteado es: <strong>${amigoSorteado}</strong>!</li>`;
}

// Ejecutar la inicialización al cargar la página
window.onload = function() {
    actualizarLista();
};