function smallestCommon(arr) {
  arr.sort();
  var primes = [];
  function checkPrime(int){
    for(var i=2; i<=Math.sqrt(int); i++){
      if(int % i == 0){
        return false;
      }
    }
    return true;
  }
  function reduce(int, primes){
    var fact=1;
    for(var i=1; i<primes.length; i++){
      var check = int;
      console.log(primes+"primes");
      if(check % primes[i] ==0){
        console.log(int+" "+primes[i]+" int,primes");
        fact = fact * primes[i];
      }
    }
    return fact;
  }
  var lcm = 1;
  for(var i=arr[0]; i<=arr[1]; i++){
    if(checkPrime(i)){
      primes.push(i);
      console.log(i);
      lcm = lcm*i;
    }
    else{
      console.log(reduce(i,primes));
      lcm = lcm*reduce(i,primes);
    }
  }
  console.log(lcm);
  return lcm;
}

smallestCommon([1,5]);
