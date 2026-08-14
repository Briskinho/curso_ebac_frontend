document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form-sorteador');
    const inputNomes = document.getElementById('nomes-input');
    const btnLimpar = document.getElementById('btn-limpar');
    const listaContainer = document.getElementById('lista-container');
    const listaNomesElemento = document.getElementById('lista-nomes');
    const resultadoContainer = document.querySelector('.resultado');
    const resultadoValor = document.getElementById('resultado-valor');

    // evento para não resetar a página
    form.addEventListener('submit', function(evento) {
        evento.preventDefault();

        //pegar o texto e dividir pelas virgulas
        const textoDigitado = inputNomes.value; //pega o valor do texto digitado
        const listaNomes = textoDigitado.split(',').map(nome => nome.trim()).filter(nome => nome.length > 0); //romeve vazio e separa as virgulas

        // caso n seja colocado nenhum nome mas adicionado a virgula em espaçoes vazios, vamos colocar um erro alert
        if (listaNomes.length === 0) {
            alert('Digite pelo menos um nome.');
            return;
        }

        // atualizar a lista e exibir a mesma abaixo do form
        listaNomesElemento.innerHTML = '';
        listaNomes.forEach(function(nome) {
            const li = document.createElement('li');
            li.textContent = nome;
            listaNomesElemento.appendChild(li);
        });
        listaContainer.style.display = 'block';

        // sortear um nome com base no arrey
        const indiceSorteado = Math.floor(Math.random() * listaNomes.length);
        const nomeSorteado = listaNomes[indiceSorteado];

        // resultado do sorteador
        resultadoValor.innerText = nomeSorteado;
        resultadoContainer.style.display = 'block';
    });
    // limpar a lista de nomes cadastrados
    btnLimpar.addEventListener('click', function() {
        inputNomes.value = '';
        listaNomesElemento.innerHTML = '';
        listaContainer.style.display = 'none';
        resultadoContainer.style.display = 'none';
        resultadoValor.innerText = '';
    });
});