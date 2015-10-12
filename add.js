function add() {
  //STOLEN FROM STACK OVERFLOW http://stackoverflow.com/questions/1019515/javascript-test-for-an-integer
  function isInt(value) {
    return !isNaN(parseInt(value,10)) && (parseFloat(value,10) == parseInt(value,10));
  }
  var intRegex = /\d/;
  if(intRegex.test("2")) {
    console.log('a');
  }
  //STOLEN from closure page https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
  function makeAdder(x) {
    return function(y) {
      return x+y;
    };
  }
  if(isInt(arguments[0]) && isInt(arguments[1]) ){

    return arguments[0]+arguments[1];
  }
  else if(isInt(arguments[0]) == false || isInt(arguments[1]) == false){
      return undefined;
  }
  else if (arguments[0] == undefined){
    return undefined;
  }
  else if (isInt(arguments[0]) && arguments[1] == undefined){
    return makeAdder(arguments[0]);
  }
  else{
    return undefined;
  }

}


console.log(add(2,"3"));
