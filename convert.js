function convert(num){

  var addArray = [{M:1000}, {D:500, C:100}, {L:50, X:10},{V:5, I:1} ];
  var subArray = [{}, {C:-100, D:500, M:1000},{X:-10, L:50, C:100}, {I:-1,V:5,X:10}];
  function base10(num){
      //returns array of each base 10 part of num, size 4
      //input: int
      //output: array of form [ones, tens, hundreds, thousands]
      var numCopy = num;
      var decArray = [];
      for (var i=3; i>=0; i--){
        var currentExpPart = 0;
        while(numCopy>=Math.pow(10, i)){
          currentExpPart = currentExpPart+ Math.pow(10, i);
          numCopy = numCopy-Math.pow(10,i);
        }
        decArray.push(currentExpPart);
      }
      return decArray;
    }
  var decArray = base10(num);
  function romanNum(decArrayVal, addArrayObj, subArrayObj){
    function byAdding(decArrayVal, addArrayObj){
      var decCopy = decArrayVal;
      var numKeys = Object.keys(addArrayObj);
      console.log(numKeys);
      var currentNumeralRep = '';
      for (var i=0; i<numKeys.length; i++){
        console.log(i+'and'+numKeys[i]);
        while(decCopy>=addArrayObj[numKeys[i]]){
          currentNumeralRep = currentNumeralRep.concat(numKeys[i]);
          decCopy = decCopy-addArrayObj[numKeys[i]];
          console.log(decCopy, currentNumeralRep);
        }
      }
      return currentNumeralRep;
    }
    function bySub(decArrayVal, subArrayObj){
      var numKeys = Object.keys(subArrayObj);
      var subVal = subArrayObj[numKeys[0]];
      var tryVal1 = subArrayObj[numKeys[1]]+subVal;
      var tryVal2 = subArrayObj[numKeys[2]]+subVal;

      console.log(tryVal1, tryVal2, decArrayVal)
      if(decArrayVal == (tryVal1)){
        console.log('tryval1');
        return numKeys[0].concat(numKeys[1]);
      }
      else if(decArrayVal == (tryVal2)){
        console.log('tryval2');
        return numKeys[0].concat(numKeys[2]);
      }
      else{
        return "NOPOSSIBLESUBTRACTION";
      }
    }
    var numArray = [];
    for (var i=0; i<=3; i++){
      var addTry = byAdding(decArray[i], addArray[i]);
      if (i==0){
        numArray.push(addTry);
      }
      else{
        subTry = bySub(decArray[i], subArray[i]);
        if(subTry.length<addTry.length){
          numArray.push(subTry);
        }
        else{
          numArray.push(addTry);
        }
      }
    }
  return numArray;
  }

  var numArray = romanNum(decArray, addArray, subArray);
  console.log(numArray.join(''));
  return numArray.join('');
}
  convert(1159);
