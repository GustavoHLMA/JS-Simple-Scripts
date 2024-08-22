//Transformar strings em uma lista de caracteres
//Ordenar caracteres em ordem alfabetica
//Transforma em string novamente

const anagrama = (string1, string2) => {
  if (string1.length !== string2.length) {
    return console.log('as strings não são anagramas')
  }

  const newString1 = string1.split("").sort().join("").replace(/\s+/g, '').toLowerCase()
  const newString2 = string2.split("").sort().join("").replace(/\s+/g, '').toLowerCase()

  if (newString1 == newString2) {
    return console.log('as strings são anagramas')
  }

  return console.log('as strings não são anagramas')
}

anagrama("listen", "silent")