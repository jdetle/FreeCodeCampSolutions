function unite2(arr1,arr2,arr3){
  var newArr = [];
  var seen = {};
  for(var i=0; i<arguments.length; i++){
    var temp = arguments[i];
    for (var j = 0; j < temp.length; j++) {
      if(seen[temp[j]] == undefined){
        newArr.push(temp[j]);
      }
      seen[temp[j]] = true;
    }
  }
  return newArr;

}
unite2([1, 2, 3], [5, 2, 1])
