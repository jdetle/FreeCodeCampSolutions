function every(collection, pre) {
  // Does everyone have one of these?
  keys = Object.keys(collection);
  console.log(keys);
  console.log(collection[0])
  console.log(collection[keys[0]].hasOwnProperty(pre))
  for (var i = 0; i < keys.length; i++){
    if (collection[keys[i]].hasOwnProperty(pre) == false){
      console.log(collection[keys[i]].hasOwnProperty(pre))
      return false;
    }
  }
  return true;

}

every([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sel": "female"}], "sex");
