const vogais = ['a','e','i','o','u']
let array=[]

const contarVogais = (string) =>{
  let contador = 0
  for (let i = 0; i < string.length; i++) {
    let letter = string.slice(i,i+1)
    array.push(letter)
  }

  for (let a = 0; a < array.length; a++ ) {
    if (vogais.includes(string[a]))
      contador++
  }

  return contador

}


console.log(contarVogais('bola'))
