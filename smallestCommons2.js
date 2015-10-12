function smallestCommons(arr) {
  arr.sort();
  var lcm = 1;
  for(var i = arr[0]; i<=arr[1]; i++){
    lcm = lcm*i;
  }
  max = lcm;
  console.log(max);
  primes = [];
  function checkPrime(int){
    for(var i=2; i<=Math.sqrt(int); i++){
      if(int % i == 0){
        return false;
      }
    }
    return true;
  }
  for(var i = 2; i<Math.sqrt(max); i++){
    if(checkPrime(i)){
      primes.push(i);
    }
  }
  for(var i = 0; i<primes.length; i++){
    if(lcm % primes[i] == 0 && lcm/primes[i] % primes[i] == 0){
      lcm = lcm/primes[i];
    }
  }
  console.log(primes);
  return lcm;
}


smallestCommons([1,13]);
