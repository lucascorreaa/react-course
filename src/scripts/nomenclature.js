// tipos de dados 

const name = "Lucas"
const age = 20
const isAprovved = false
const shoes = {
    number: 39,
    brand: "nike",
    since: 2018
} 
const numbers = [1, 2, 3, 4, 5]

console.log(name.length, "valor de caracteres")

const num = numbers.map((number) => {
    return number * 2
})

console.log(num)
// nomenclatura de variavél

const userName = "Lucas Correa"

const user_name = "Lucas Correa"

// nomenclatura de funções

function SomaNumeros(a, b) {
    return a + b
}

const primeiroNumero = 10

const segundoNumero = 20

console.log(SomaNumeros(primeiroNumero, segundoNumero))
console.log(10 + 40)