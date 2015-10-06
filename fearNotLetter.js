function fearNotLetter(str) {
  var charCode = undefined;
  var index;
  for(var i=0; i<str.length;i++){
    var diff = str.charCodeAt(i+1)-str.charCodeAt(i);
    if(diff>1){
      charCode = str.charCodeAt(i)+1;
      index = i+1;
    }
  }
  if(charCode == undefined){
    return charCode;
  }
  else{
    var beginning = str.substring(0,index);
    var middle = String.fromCharCode(charCode);
    var end = str.substring(index,str.length);
    var newStr = beginning+middle+end;
  }
  console.log(newStr);
  return newStr;

}

fearNotLetter('abce');
