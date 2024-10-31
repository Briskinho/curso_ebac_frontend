// main.js
document.getElementById("btn-validar").addEventListener("click", function(event) {
    event.preventDefault();
    const valorA = document.getElementById("form-A").value;
    const valorB = document.getElementById("form-B").value;
    const form = document.getElementById("form-AB");
    const mensagem = document.createElement("p");

    // Remover mensagem anterior.
    const mensagemAnterior = document.querySelector(".mensagem");
    if (mensagemAnterior) {
      mensagemAnterior.remove();
    }

    // Verificar se ambos os campos estão vazios
    if (valorA === "" && valorB === "") {
        mensagem.textContent = "Por favor, insira valores nos campos A e B.";
        mensagem.style.color = "red";
    }
    // Verificar se um dos campos está vazio
    else if (valorA === "" || valorB === "") {
        mensagem.textContent = "Preencha todos os campos!";
        mensagem.style.color = "red";
    }
    // Verificar se B é maior que A
    else if (Number(valorB) > Number(valorA)) {
        const mensagemSucesso = `Formulário válido: o valor de B <b>${valorB}</b> é maior que o valor de A <b>${valorA}</b>.`;
        mensagem.innerHTML = mensagemSucesso;
        mensagem.classList.add("mensagem-sucesso");
    }
    // Verificar se A e B são iguais
    else if (Number(valorB) === Number(valorA)) {
        mensagem.textContent = "Formulário inválido: o valor de B não pode ser igual ao valor de A.";
        mensagem.style.color = "orange";
    }
    // Caso B seja menor que A
    else {
        mensagem.textContent = "Formulário inválido: o valor de B deve ser maior que o valor de A.";
        mensagem.style.color = "red";
    }

    mensagem.classList.add("mensagem");
    form.appendChild(mensagem);
});
