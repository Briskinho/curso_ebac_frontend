//array de objetos:

const alunos = [
    { nome: 'Ana', nota: 8.5 },
    { nome: 'Carlos', nota: 5.0 },
    { nome: 'Beatriz', nota: 6.0 },
    { nome: 'Daniel', nota: 4.5 },
    { nome: 'Ester', nota: 9.0 },
    { nome: 'Felipe', nota: 5.8 },
    { nome: 'Weslley', nota: 10.0}
]

// console.log(alunos);

function filtraAlunosNota(aluno) {
    return aluno.nota >= 6;
}

const alunosAprovados = alunos.filter(filtraAlunosNota);

console.log(alunosAprovados);