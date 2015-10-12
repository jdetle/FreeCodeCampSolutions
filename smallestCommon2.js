function smallestCommons(arr) {
  arr.sort();
  function leastCommon(x,y){
    if(x == 1){
      return y;
    }
    else if(y == 1){
      return x;
    }
    else{
      for(var i = 1; i <= x*y; i++){

        console.log(x+" "+y+" x,y");
        //console.log(x*i);
        if ((i*y) % x == 0){
          return i*y;
        }
      }
    }
  }
  var lcm = leastCommon(arr[0], arr[0]+1);
  //console.log(lcm);

  for(var i = arr[0]+2; i<=arr[1]; i++){
    console.log(lcm+ "  "+ i +" lcm, i");
    lcm = leastCommon(i, lcm);
  }
  console.log(lcm);
  return lcm;
}

smallestCommons([1,20]);
