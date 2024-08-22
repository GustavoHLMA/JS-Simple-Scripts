const ehPalindromo = (string) => {
    let newString = ""
    const string1 = string.replace(/\s+/g, '')
    for (let i = string1.length - 1; i>=0; i-- ){
      const str = string1.slice(i, i+1)
      newString += str
    }

    if (string1 == newString) {
      return true
    }

    return false
}

console.log(ehPalindromo('bola'));
