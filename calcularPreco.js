const percentual = (a) => {
  return  (a/100)
}

const calcularPrecoFinal = (precoOrignal, percentualDesconto) => {
  if (percentualDesconto > 100 || percentualDesconto < 0)
    return ("Erro!")
  precoOrignal = parseInt(precoOrignal)
  percentualDesconto = percentual(percentualDesconto)
  const desconto = precoOrignal * percentualDesconto
  return precoOrignal - desconto
}

console.log(calcularPrecoFinal(10,101))

