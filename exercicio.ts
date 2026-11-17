//multiplicação
function multiplica(numero1: number, numero2: number): number {
    return numero1 * numero2;
}

//saudação
function dizOla(nome: string): string {
    return "Olá " + nome;
}

//validação
const resultadoMultiplica = multiplica(5, 4);
const saudacaoDizOla = dizOla("Professor");

console.log(resultadoMultiplica);
console.log(saudacaoDizOla);