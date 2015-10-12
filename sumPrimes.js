function sumPrimes(num) {
  function checkPrime(int){
    for(var i=2; i<=Math.sqrt(int); i++){
      if(int % i == 0){
        return false;
      }
    }
    return true;
  }
  var sum = 0;
  for(var i=2; i<num+1; i++){
    if(checkPrime(i)){
      sum = sum+i;
    }
  }
  console.log(sum);
  return sum;
}

sumPrimes(10);
