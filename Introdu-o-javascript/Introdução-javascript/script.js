//console.log() mostra uma informação no console
console.log("Bem Vindo a Pagina!");
console.log(6 * 2)

console.log(typeof "Ola Mundo!"); //string
console.log(typeof 22); //number
console.log(typeof 10.5); //number
console.log(typeof true); //boolean
console.log(typeof false); //boolean

// váriavel
// const não pode ter seu valor alterado durante o programa
const nome = "Robert";
console.log(nome);

//let pode ter seu valor alterado durante o programa
let idade = 18;
console.log(idade);

idade = 19;
console.log(idade);

console.log("Bem Vindo " + nome + ", que tem " + idade + " anos.")

console.log(`Bem Vindo ${nome}, que tem ${idade} anos.`)

const nomedois = "Naruto"
console.log(nomedois)

let peso = 70

peso = 80
console.log(`Bem Vindo ${nomedois}, que tem ${peso} kg`)

//Métodos de string
const texto = "pneumOultramicroscopicossilicovulcanOconiose"

// conta quantos caracteres a string tem
console.log(texto.length)

// altera todas as letras para maíusculo
console.log(texto.toUpperCase())

// altera todas as letras para minúsculo
console.log(texto.toLowerCase())

const nome_completo = "Robert Willkerson Alves de Souza"

console.log(nome_completo.includes("Souza")) //true

console.log(10 > 5) //true
console.log(10 < 5) //false
console.log(10 >= 10) //true
console.log("10" == 10) //true
console.log("10" === 10) //false
console.log(10 !== 5) //true

const idadePessoa = 17
console.log(idadePessoa >= 18) //false
console.log(idadePessoa >= 16) //true
const nomeCompleto = "Son Goku"
console.log(nomeCompleto === "Son Wukong")
console.log(nomeCompleto === "Son Goku")

// coletamos a imagem da pessoa
let Idade = 15
if (Idade >= 18) {
    // se maior ou igual que 18 então é ela maior de idade
    console.log("Já Pode Ser Preso HAHAHAHAHAHAHA!")
} else {
    // se menor que 18 então ela é menor de idade
    console.log("Não Vai pra Balada! 😂😂😂")
}

//coletamos a idade da pessoa
//verifica se a idade da pessoa é maior que 70
//senão se a idade da pessoa for maior ou igual a 18
//se a idade for maior ou igual a 16
//senão for nenhuma das alternativas anteriores

let Idade2 = 15
if (Idade2 > 70) {
    console.log("Você não é obrigado a votar!")
} else if (Idade2 >= 18) {
    console.log("Você tem que votar obrigatoriamente!")
} else if (Idade2 >= 16) {
    console.log("Você não é obrigado a votar, mas caso queira pode!")
} else {
    console.log("Você NÃO pode votar!")
}

//JavaScript — Exercícios de Condicionais 

//Parte 1 — Decisões simples

//01
let aprovaçãoEscolar = 7
if (aprovaçãoEscolar >= 7) {
    console.log("Aprovado")
} else {
    console.log("Reprovado")
}

//02
let comparaçãoDeDoisNúmeros1 = 5
let comparaçãoDeDoisNúmeros2 = 5
if (comparaçãoDeDoisNúmeros1 = comparaçãoDeDoisNúmeros2) {
    console.log("Empate")
}
else if (comparaçãoDeDoisNúmeros1 >= comparaçãoDeDoisNúmeros2) {
    console.log("O primeiro número é maior")
}
else if (comparaçãoDeDoisNúmeros2 >= comparaçãoDeDoisNúmeros1) {
    console.log("O segundo número é maior")
}
    

//03
let Senha = "senai123"
if (Senha === "senai123") {
    console.log("Aprovado")
} else {
    console.log("Reprovado")
}

//Parte 2 — Múltiplos caminhos

//04
let grausCelsius = 22
if (grausCelsius > 27) {
    console.log("Quente")
}
else if (grausCelsius >= 18) {
    console.log("Agradavel")
}
else {
    console.log("Frio")
}

//05 
let classificaçãoDeNotas = 8
if (classificaçãoDeNotas >= 9) {
    console.log("Excelente")
}
else if (classificaçãoDeNotas >= 7) {
    console.log("Bom")
}
else if (classificaçãoDeNotas >= 5) {
    console.log("Regular")
}
else {
    console.log("Insuficiente")
}

//06

let diaDaSemana = 4
if (diaDaSemana = 1) {
    console.log("Domingo")
} else if (diaDaSemana = 7) {
    console.log("Sabádo")
} else {
    console.log("Dia Inválido")
}



