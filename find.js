function find(arr, func) {
  if(arr.some(func) == false){
    return undefined;
  }
  else{
    for(var i = 0; i<arr.length; i++){
      if(func(arr[i])){
        return arr[i];
      }
    }
  }


find([1, 2, 3, 4], function(num){ return num % 2 === 0; });
