let amigos = [];

function adicionarAmigo() {
    let inputAmigo = document.querySelector('input');
    let nomeAmigo = inputAmigo.value.trim();

    if (nomeAmigo == '') {
        alert('Por favor, insira um nome válido');
    } else {
        amigos.push(nomeAmigo);
        inputAmigo.value = '';
        atualizaLista()
    }
}

function atualizaLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    amigos.forEach((nome, index) => {
        let item = document.createElement('li');
        item.textContent = nome;
        lista.appendChild(item);
    })
}

function sortearAmigo() {
    if (amigos.length == 0) {
        alert('A lista está vazia. Adicione amigos antes de sortear');
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceSorteado];

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>Amigo sorteado: <strong>${amigoSorteado}</strong></li>`;
}