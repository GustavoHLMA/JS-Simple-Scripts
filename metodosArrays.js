//o método map é um método que percorre um array e retorna um novo array com os elementos modificados pela função passada como argumento

const dobrar = (a) => {
  return a*2
}

let list = [1, 2, 3, 4, 5]
let doubledList = list.map(dobrar)
console.log(list[1])

//o método forEach é um método que percorre um array e executa uma função para cada elemento do array sem retornar um novo array

const users = [
  { name: "clóvis", id: 1, active: true },
  { name: "silva", id: 2, active: false },
  { name: "neto", id: 3, active: true },
]
​
users.forEach(function (user) {
  console.log(user.name)
})

//o método filter é um método que percorre um array e retorna um novo com os elementos que passaram no teste da função passada como argumento

const users1 = [
  { name: "clóvis", id: 1, active: true },
  { name: "silva", id: 2, active: false },
  { name: "neto", id: 3, active: true },
]

const activeUsers = users.filter(function (user) {
  return user.active
}
)
console.log(activeUsers)

//o método reduce é um método que percorre um array e retorna um único valor com base na função passada como argumento

const numbers = [1, 2, 3, 4, 5]
const sum = numbers.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue
})

console.log(sum)

//o método find é um método que percorre um array e retorna o primeiro elemento que passou no teste da função passada como argumento

const users2 = [
  { name: "clóvis", id: 1, active: true },
  { name: "silva", id: 2, active: false },
  { name: "neto", id: 3, active: true },
]

const user = users2.find(function (user) {
  return user.active
}

)
console.log(user)
  
//o método some é um método que percorre um array e retorna true se pelo menos um elemento passou no teste da função passada como argumento

const users3 = [
  { name: "clóvis", id: 1, active: true },
  { name: "silva", id: 2, active: false },
  { name: "neto", id: 3, active: true },
]

const hasActiveUsers = users3.some(function (user) {
  return user.active
}
)

console.log(hasActiveUsers)


  