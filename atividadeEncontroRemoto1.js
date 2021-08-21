//Simulando um sistema simples de cadastro de peças (Usado apenas como exemplo para explicação da Lógica).

const listaDePecas = ["Amortecedor", "Freio", "Radiador", "Ar condicionado"];

console.log(listaDePecas);

// Verifica se a lista possui mais de  itens;
if (listaDePecas.length < 10) {
    console.log("É possível cadastrar mais peças");
} else {
    console.log("Não há mais espaço na lista");

};

//Verifica se o peso da peça é maior ou igual ao peso estipulado pela situação problema. Neste caso 100g.
var peso = 50;

if (peso >= 100) {
    console.log("O peso da peça está adequado");
} else {
    console.log("A peça possui peso insuficiente");
};

//Verifica se nome da peça possui mais do que 3 caracteres;
let nomePeca = "Calha de chuva";

switch (nomePeca.length) {
    case 0:
        console.log("O nome da peça não pode ser vazio")
        break;
    case 1:
    case 2:
    case 3:
        console.log("O nome da peça deve possuir mais de 3 caracteres")
        break;
    default:
        console.log("O nome da peça está adequado!")
        break;

};
