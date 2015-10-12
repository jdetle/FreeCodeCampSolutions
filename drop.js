  function drop(arr, func) {
    // Drop them elements.
    var drop = arr.filter(func);
    console.log(drop);
    return drop;
  }

  drop([1, 2, 3], function(n) {return n < 3; });
