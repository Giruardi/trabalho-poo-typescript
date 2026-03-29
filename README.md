Trabalho de Pesquisa e Prática: Pilares da POO

Objetivo

Compreender a aplicação prática de Herança e Polimorfismo utilizando o ecossistema TypeScript para reutilização e especialização de código.

1. Herança (Inheritance)



Conceito: É o pilar da Programação Orientada a Objetos que permite que uma classe (denominada classe filha ou subclasse) herde automaticamente todas as propriedades e métodos de outra classe (denominada classe pai ou base).



Palavra-chave extends: No TypeScript, utilizamos o termo extends para estabelecer o vínculo de herança, permitindo que a classe filha aproveite a estrutura já definida na classe pai sem a necessidade de duplicar código.



Aplicação Prática: No projeto desenvolvido, a classe Candidato herda as características básicas de Pessoa (nome e idade), demonstrando a reutilização de atributos comuns.

2. Polimorfismo e Sobrescrita (Overriding)

Conceito: O polimorfismo permite que um mesmo método apresente comportamentos diferentes em classes distintas. Ele possibilita que uma classe filha modifique ou "especialize" uma ação que recebeu por herança.

Sobrescrita (Overriding): É o ato de redefinir um método da classe pai dentro da classe filha. No TypeScript, isso é sinalizado pela palavra-chave override, garantindo que o compilador valide a existência do método original.

O papel do super(): O método super() é fundamental para acessar o construtor ou as funcionalidades da classe pai de dentro da classe filha. Ele permite que a lógica original seja executada antes ou depois da lógica especializada da subclasse.

Aplicação Prática: O método exibirDados() foi sobrescrito na classe Candidato. Ele utiliza o super.exibirDados() para mostrar os dados base e adiciona a exibição do cargo, que é uma informação exclusiva da classe filha.





