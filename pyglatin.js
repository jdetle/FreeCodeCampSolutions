function translate(str){
  var vowels = ['A','a','E','e','I','i','O','o','U','u'];

  function findFirstVowelIndex(str){
    for (var i=0; i<str.length; i++){
      for(var j=0; j<vowels.length; j++){
        if(str.charAt(i) === vowels[j]){
          console.log(i);
          return i;
        }
      }
    }
  }
  var index = findFirstVowelIndex(str);
  if(index == 0){
    return str+"way";
  }
  else{
    var ending = str.substring(0,index);
    var beginning = str.substring(index,str.length);
    return beginning+ending+"ay";
  }

}

translate('pig');
