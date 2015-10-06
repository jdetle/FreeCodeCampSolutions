function convert2(str){
  var newStr = str.replace(/&/gi,"&amp");
  newStr = newStr.replace(/</gi,"&lt");
  newStr = newStr.replace(/>/gi,"&gt");
  return newStr;
}
