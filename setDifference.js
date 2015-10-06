function diff(arr1, arr2) {
  var newArr = [];
  var seen1 = {};
  var seen2 = {};

  for (var i = 0; i < arr1.length; i++) {
    seen1[arr1[i]] = true;
  }
  for (var i = 0; i < arr2.length; i++) {
    seen2[arr2[i]] = true;
  }
  var keys1 = Object.keys(seen1);
  var keys2 = Object.keys(seen2);
  for(var i = 0; i<keys1.length; i++){
    if(seen2.hasOwnProperty(keys1[i]) == false){
      if(isNaN((keys1[i])) == true){
        newArr.push(keys1[i]);
      }
      else{
        var key = parseInt(keys1[i], 10);
        newArr.push(key);
      }
    }
  }
  for(var i = 0; i<keys2.length; i++){
    if(seen1.hasOwnProperty(keys2[i]) == false){
      if(isNaN((keys2[i])) == true){
        newArr.push(keys2[i]);
      }
      else{
        var key = parseInt(keys2[i], 10);
        newArr.push(key);
      }
    }
  }

  console.log(newArr);
  return newArr;
}

a = {};
a[7] = true;
x = 0;
if (a[7]) x++;
console.log(x);
if (a[8]) x++;
console.log(x);
