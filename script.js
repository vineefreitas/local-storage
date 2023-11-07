const dados = JSON.parse(localStorage.getItem('dados'));

document.getElementById('tela').innerHTML = `Nome: ${dados.nome} <br>`;
document.getElementById('tela').innerHTML = `Idade: ${dados.idade} <br>`;
document.getElementById('tela').innerHTML = `Time: ${dados.time} <br>`;

function gravarDados() {
    
    const dados = {
        nome: document.getElementById('nome').value,
        idade: document.getElementById('idade').value,
        time: document.getElementById('time').value
    }

    document.getElementById('tela').innerHTML += `Nome: ${dados.nome} <br>`;
    document.getElementById('tela').innerHTML += `Idade: ${dados.idade} <br>`;
    document.getElementById('tela').innerHTML += `Time: ${dados.time} <br>`;

    localStorage.setItem('dados' , JSON.stringify(dados));
}

function ApagarDados() {

    localStorage.removeItem('dados');
    document.getElementById ('tela').innerHTML = '';
}