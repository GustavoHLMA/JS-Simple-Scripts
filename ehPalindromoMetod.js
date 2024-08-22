const checarPalindromo = (str) => {
  const wordArray = str.split("")
  const reversedArray = wordArray.reverse()
  const word = reversedArray.join("")
  if (str === word) {
    console.log(word)
    return true
  }
  return false
}

const encontrarPalindromo = (str) => {
  const resultado = new Set()
  const tamanho = str.length

}

console.log(checarPalindromo('acca'))

