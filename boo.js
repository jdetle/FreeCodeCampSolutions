function boo(bool) {
  // What is the new fad diet for ghost developers? The Boolean.
  var checkBool = new Boolean(bool);
  return checkBool;
  if(checkBool){
    console.log(checkBool);
    return true;
  }
  else{
    console.log(checkBool);
    return false;
  }
}

boo(0);
boo(NaN);
boo('str');
