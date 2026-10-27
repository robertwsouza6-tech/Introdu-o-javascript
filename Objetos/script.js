const motorista = {
  Idade: 18,
  temCNH: true,
  Carro: false,
}

console.log(motorista)

motorista.Idade += 1
motorista.temCNH = false
motorista.Carro = true

console.log(motorista)

//01

const Produto = {
  Nome: "Lixeira",
  Marca: "Coletex",
  Preço: "R$15.00",
  Disponivel: false,
}

console.log(Produto.Nome)
console.log(Produto.Preço)

//Laço de repetição
for (let contador = 0; contador <= 67667; contador++) {
  console.log(contador);
}

//02

const Número = 7

console.log(`--- Tabuada de ${Número} ---`)
for (let Contador = 1; Contador <= 10; Contador++) {
  const Resultado = Número * Contador
  console.log(`${Contador} x ${Número} = ${Resultado}`);
}

let cont4dor = 1;
let numeroWhile = 12;

while (cont4dor <= 10) {
  console.log(cont4dor * numeroWhile);
  cont4dor++;
}

//03 

let numero = 20

while (numero >= 0) {
  console.log(`while: ${numero}`)
  numero -= 1
}

let Number2 = 20

do {
  console.log(Number2)
  Number2 -= 2
} while (Number2 > 0)

//04

let N1 = 10
do {
  console.log(N1)
  N1--
} while (N1 >= 1)
console.log("Fim da contagem")

//Listas

var frutas = ["Maça", "Banana", "Uva", "Laranja"]


frutas[0] = "Pêra"
console.log(frutas)

console.log(frutas[0])
console.log(frutas[2])

console.log(frutas.lenght)

frutas.push("Manga", "Tomate", "Abacaxi")

console.log(frutas)

frutas.pop()

console.log(frutas)

frutas.sort()

console.log(frutas)

function somar(numero1, numero2) {
  return numero1 + numero2
}

somar(1, 1)
somar(6, 7)

const soma = somar(1, 1)
console.log(soma)

console.log(somar(6, 7))


function dividir(numero1, numero2) {
  console.log(`${numero1} / ${numero2} = ${numero1 / numero2}`)
}

dividir(100, 2)

// exercícios

//01

const Jogos = ["God of War", "GTA", "Elder ring"]
console.log = Jogos
Jogos.push("Fallout", "Minecraft")

//02

const Materiais = ["Borracha", "Caneta", "Tesouro", "Caderno", "Lapis"];
console.log(Materiais);
Materiais.pop();

//03

function Saudar(Robert){
  return "Olá, " + Robert + "!"
}
console.log(Saudar)

function Dobro(numero){
  return ''
}
