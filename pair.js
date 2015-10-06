function pair(str) {
  var pairArr = [];
  function oppositeNuc(char){
    if(char == 'A'){
      return 'T';
    }
    else if (char == 'T'){
      return 'A';
    }
    else if (char == 'G'){
      return 'C';
    }
    else{
      return 'G';
    }
  }
  for(var i=0; i<str.length; i++){
    var currentArr = [];
    currentArr.push(str.charAt(i));
    currentArr.push(oppositeNuc(str.charAt(i)));
    pairArr.push(currentArr);
  }
  console.log(pairArr);
  return currentArr;
}

pair("GCG");
