function sumFibs(num) {
  var currentFib = 1;
  var previousFib = 1;
  var copyCurrent;
  var oddVal = 1;
  while(currentFib<num){
      copyCurrent = currentFib;
      if(copyCurrent % 2 == 1 && num>1){
        oddVal = oddVal+copyCurrent;
      }
      currentFib = currentFib+previousFib;
      previousFib = copyCurrent;
  }
  console.log(oddVal);
  return oddVal;
}
sumFibs(4);
