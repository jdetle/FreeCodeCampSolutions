function unite(arr1, arr2, arr3) {
  var newArr = [];
  var seen1 = {};
  var seen2 = {};
  var seen3 = {};
  for (var i = 0; i < arr1.length; i++) {
    if(seen1[arr1[i]]==undefined){
      console.log(arr1[i]);
      newArr.push(arr1[i]);
    }
    seen1[arr1[i]] = true;
  }
  for (var i = 0; i < arr2.length; i++) {
    if(seen1[arr2[i]]== undefined && seen2[arr2[i]] == undefined){
      console.log(arr2[i]);
      newArr.push(arr2[i]);
    }
    seen2[arr2[i]] = true;
  }
  for (var i = 0; i < arr3.length; i++){
    if(seen1[arr3[i]] == undefined && seen2[arr3[i]] == undefined && seen3[arr3[i]] == undefined){
      console.log(arr3[i]);
      newArr.push(arr3[i]);
    }
    seen3[arr3[i]]=true;
  }
  console.log(newArr);
  return(newArr);


}

unite([1, 3, 2], [1, [5]], [2, [4]])
