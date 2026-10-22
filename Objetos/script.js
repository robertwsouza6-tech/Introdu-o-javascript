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

const Número= 7

console.log(`--- Tabuada de ${Número} ---`)
for (let Contador = 1; Contador <= 10; Contador++) {
  const Resultado = Número * Contador
  console.log(`${Contador} x ${Número} = ${Resultado}`);
}