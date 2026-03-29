// --- PARTE PRÁTICA ---

class Pessoa {
    constructor(public nome: string, public idade: number) { }

    exibirDados(): void {
        console.log(`Nome: ${this.nome} | Idade: ${this.idade}`);
    }
}

// AQUI OCORRE A HERANÇA: Candidato herda de Pessoa através do 'extends'
class Candidato extends Pessoa {
    constructor(nome: string, idade: number, public cargo: string) {
        super(nome, idade); // Uso do super() para referenciar o construtor pai
    }

    // AQUI OCORRE A SOBRESCRITA (OVERRIDING): Especializando o método do pai
    override exibirDados(): void {
        super.exibirDados(); // Reaproveitando a lógica da classe base
        console.log(`Cargo: ${this.cargo}`); // Adicionando comportamento novo
    }
}

// Teste de execução
const teste = new Candidato("Seu Nome", 20, "Desenvolvedor");
teste.exibirDados();