function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  if(str.match(' ') == null && str.match('_') == null){
    var newArr = str.split(/(?=[A-Z])/);
    var newStr = newArr.join("-");
    newStr = newStr.toLowerCase();;
    return newStr;
  }
  var newStr = str.toLowerCase();
  newStr = newStr.replace(/\s+/gi, "-");
  newStr = newStr.replace(/_/gi, "-");
  console.log(newStr);
  return newStr;

}


spinalCase('This Is Spinal Tap');
