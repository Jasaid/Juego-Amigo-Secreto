// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();
    const listaAmigos = document.getElementById("listaAmigos");

    if (!nombre) {
        alert("Debes introducir un nombre válido.");
        return;
    }
    
    if (amigos.length < 5 && !amigos.includes(nombre)) {
        amigos.push(nombre);
        const listItem = document.createElement("li");
        listItem.textContent = nombre;
        listaAmigos.appendChild(listItem);
    }

    input.value = "";
}

function sortearAmigo() {
    if (amigos.length !== 5) {
        alert("Debes agregar exactamente 5 amigos antes de sortear.");
        return;
    }
    
    let disponibles = [...amigos];
    let amigoSorteado = disponibles[Math.floor(Math.random() * disponibles.length)];
    
    mostrarResultado(amigoSorteado);
}

function mostrarResultado(amigoSorteado) {
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "";
    
    const listItem = document.createElement("li");
    listItem.textContent = amigoSorteado;
    resultado.appendChild(listItem);
}
