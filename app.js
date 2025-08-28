// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
 let listaAmigos = [];

 function agregarAmigo() {
    //paso 1. obtener el input y su valor 
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();
    
    //paso 2. Validar que no este vacio
    if( nombre == ''){
        alert('Por favor, escribe un nombre valido');
        return;
    }

    // paso 3. agregar el nombre a la lista
    listaAmigos.push(nombre);
    console.log('Array actual:', listaAmigos);

    // paso 4. limpiar el input y mostrar la lista actualizada
    input.value = '';
    
    //paso 5. Mostrar la lista 
    const listaUL = document.getElementById('listaAmigos');
    const nuevoItem = document.createElement('li');
    nuevoItem.textContent = nombre;
    listaUL.appendChild(nuevoItem);
}

    //paso 6. Sortear un amigo
function sortearAmigo() {
    // Validar que haya amigos para sortear
    if (listaAmigos.length === 0) {
        alert('Primero agrega algunos amigos');
        return;
    }
    
    // Obtener un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    console.log('Índice aleatorio:', indiceAleatorio);
    
    // Obtener el nombre ganador
    const amigoSecreto = listaAmigos[indiceAleatorio];
    console.log('Amigo secreto:', amigoSecreto);
    
    // Mostrar el resultado en el HTML
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = `<li>🎉 ¡${amigoSecreto} es tu amigo secreto! 🎉</li>`;
}