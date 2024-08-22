const checarPalindromo = (str) => {
  const wordArray = str.split("")
  const reversedArray = wordArray.reverse()
  const word = reversedArray.join("")
  if (str === word) {
    return true
  }
  return false
}

console.log(checarPalindromo('acca'))