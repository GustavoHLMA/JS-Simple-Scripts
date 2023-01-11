let cont = 0
for (cont = 0; cont <= 100; cont++) {
  if (cont % 3 === 0) {
    if (cont % 5 === 0) {
      console.log("fizbuzz")
      
    } else {
      console.log("fizz")
    }
  } else if (cont % 5 === 0) {
      console.log("buzz")

  } else {
    console.log(cont)
  }
  }