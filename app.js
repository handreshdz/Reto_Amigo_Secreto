// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

/*

let amigos=[];

function agregarAmigo(){
    let ingresarAmigo = document.getElementById("amigo");
    let nombreDelAmigo= ingresarAmigo.value;


    if (nombreDelAmigo == "") {
        alert("El nombre de amigo esta vacio. Debes ingresar un nombre");
        return;
    }

    amigos.push(nombreDelAmigo);
    ingresarAmigo.value="";
    ingresarAmigo.focus();
    listaDeAmigos();
}

function listaDeAmigos(){
    let lista_Amigos = document.getElementById("listaAmigos");
    lista_Amigos.innerHTML="";

    for (let i=0; i < amigos.length; i++){
        let elemento = document.createElement("li");
        elemento.textContent = amigos[i];
        lista_Amigos.appendChild(elemento);
    }
}


function sortearAmigo(){
    if (amigos.length === 0){
        alert("No hay amigos para realizar el sorteo");
        return;
    }

    let amigoElegido = amigos[Math.floor(Math.random()* amigos.length)];
    let seleccionado = document.getElementById("resultado");
    seleccionado.innerHTML = `El amigo seleccionado es: ${amigoElegido}`;

    let resetearListaAmigos = document.getElementById("listaAmigos");
    resetearListaAmigos.innerHTML="";
}

*/

let amigos = [];

function agregarAmigo() {
    const ingresarAmigo = document.getElementById("amigo");
    const nombre = ingresarAmigo.value.trim();

    if (!nombre) {
        alert("El nombre de amigo está vacío. Debes ingresar un nombre.");
        return;
    }

    amigos.push(nombre);
    ingresarAmigo.value = "";
    ingresarAmigo.focus();
    listaDeAmigos();
}

function listaDeAmigos() {
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    amigos.forEach(amigo => {
        const elemento = document.createElement("li");
        elemento.textContent = amigo;
        listaAmigos.appendChild(elemento);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos para realizar el sorteo.");
        return;
    }

    const amigoElegido = amigos[Math.floor(Math.random() * amigos.length)];
    document.getElementById("resultado").innerHTML = `El amigo seleccionado es: ${amigoElegido}`;

    // Limpiar la lista de amigos y actualizar la vista
    amigos = [];
    listaDeAmigos();
}