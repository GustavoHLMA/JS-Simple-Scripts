function fibonacciGenerator(num) {
  fibboList = [0, 1];
  
  if (num === 0) {
    return fibboList.slice(0,1);

  } else if (num === 1) {
      return fibboList.slice(1,2);
    
  } else {
      for (let n = 0; n <= num; n++) {
        prevNum = n + (n + 1)
        fibboList.push(prevNum);
        return fibboList;

}
    
  }
    

}

fibonacciGenerator(4)