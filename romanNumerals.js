function convert(num) {
  var newNum = '';
  Numerals = {D:500, C:100, L:50, X:10, V:5, I:1};
  var numKeys = Object.keys(Numerals);
  var i=0;
  function beginOrEnd(num, currentNumeralRep, Numerals, numKeys, i){
     console.log(num, currentNumeralRep, Numerals, numKeys, i);
     function addEnd(num, currentNumeralRep, Numerals){
         while(num>0){
           currentNumeralRep = currentNumeralRep.concat(numKeys[i]);
           num = num- Numerals[numKeys[i]];
         }
         return currentNumeralRep;
       }
       function addBegin(num,currentNumeralRep,Numerals){
         while(num>0){
           currentNumeralRep = numKeys[i].concat(currentNumeralRep);
           num = num-Numerals[numKeys[i]];
         }
         return currentNumeralRep;
       }
       var begin = addBegin(num, currentNumeralRep, Numerals, numKeys[i]);
       var end = addEnd(num, currentNumeralRep, Numerals, numKeys[i]);
       if(begin.length>end.length){
         console.log(end);
         return end;
       }
       else{
         console.log(begin);
         return begin;
       }
     }
     while(Math.floor(num/1000) > 0 &&  num>0){
         newNum = newNum.concat('M');
         num = num-1000;
       }
       for(var i=0; i<4; i++){
         newNum = beginOrEnd(num,newNum,Numerals,numKeys,i);
       }
       console.log(newNum);
       return newNum;


}

convert(9);
