function incrementStringNumber(strNum) {
  let number = BigInt(strNum);
  number++;
  return number.toString();
}

function decrementStringNumber(strNum) {
  let number = BigInt(strNum); 
  number--;
  return number.toString(); 
}

var nearestPalindromic = function(n) {
  let a = n;
  let b = n;
  
  while (true) {
      a = decrementStringNumber(a);
      b = incrementStringNumber(b);
      
      if (a === a.split("").reverse().join("")) {
          return a;
      }
      if (b === b.split("").reverse().join("")) {
          return b;
      }
  }
};

