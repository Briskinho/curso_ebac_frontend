//pratique modulo 24 - Orientação de objeto
//tarefa: 
// • Crie uma classe de uma abstração;
// • Crie pelo menos duas classes que sejam herdeiras da classe criada anteriormente;
// • Crie pelo menos três instâncias de objetos;
// • No repositório do curso crie uma branch chamada oo_js e armazene o código do exercício.
// • Envie o link do repositório através da plataforma. 


//primero criar a classe de abstração
function Pessoa(nome) {
    this.nome = nome;
}

function ProfissionalTI(nome, area, salario) {
    Pessoa.call(this, nome);
    this.area = area;
    this.salario = salario;
    let _projetosEntregues = 0;

    this.getProjetos = function() {
        return _projetosEntregues;
    }

    this.setProjetos = function() {
        _projetosEntregues++;
        console.log(`${this.nome} entregou um projeto! Total: ${_projetosEntregues}`);
    }

}

function Designer(nome, area, salario) {
    ProfissionalTI.call(this, nome, area, salario);
}

function Desenvolvedor(nome, area, salario) {
    ProfissionalTI.call(this, nome, area, salario);
}

const profissional1 = new Designer("Weslley", "UX/UI", 4000);
const profissional2 = new Designer("Gian", "3D Designer", 5000);  
const profissional3 = new Desenvolvedor("Marcos", "Full Stack Java", 6000);
const profissional4 = new Desenvolvedor("Pedro", "PHP", 8000);

profissional1.setProjetos();
console.log(profissional1);

profissional2.setProjetos();
console.log(profissional2);

profissional3.setProjetos();
console.log(profissional3);

profissional4.setProjetos();
console.log(profissional4);