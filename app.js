const amigoInput = document.getElementById('amigo');
const listaAmigos = document.getElementById('listaAmigos');
const resultado = document.getElementById('resultado');

let nomes = [];

function adicionarAmigo() {
    const nome = amigoInput.value.trim();

    if (nome === '') {
        alert('Por favor, insira um nome válido.');
        return;
    }

    nomes.push(nome);

    amigoInput.value = '';

    atualizarLista();
}

function atualizarLista() {
    listaAmigos.innerHTML = '';

    nomes.forEach((nome, index) => {
        const li = document.createElement('li');
        li.textContent = nome;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    if (nomes.length === 0) {
        alert('Adicione pelo menos um nome para sortear.');
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * nomes.length);

    resultado.innerHTML = `<li>O amigo secreto é: <strong>${nomes[indiceSorteado]}</strong></li>`;
}
