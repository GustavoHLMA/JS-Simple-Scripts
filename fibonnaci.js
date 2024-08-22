function fibonacciGenerator(n) {
  let fibboList = [0, 1];
  
  if (n === 1) {
    return fibboList.slice(0,1);

  } else if (n === 2) {
      return fibboList.slice(0,2);
    
  } else {
      for (let num = 0; num < n - 2; num++) {
        let prevNum = fibboList[num] + fibboList[num + 1];
        fibboList.push(prevNum);      
      } 
      return fibboList
}
  }
