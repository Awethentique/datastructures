

                            // Constant runtime - As input size increases the runtime does not increase
function log(array){        // Big O Notation: "O (1)"
  console.log(array[0]);
  console.log(array[1]);
}

log([1,2,3,4]);
log([1,2,3,4,5,6,7,8,9,10]);





                              // Linear runtime - runtime increases proportionately to the input size increase
function logAll(array) {      // Big O Notation: "O (n)"
  for (var i= 0; i < array.length; i++){
    console.log(array[i]);
  }
}

logAll([1,2,3,4,5]);
logAll([1,2,3,4,5,6]);
logAll([1,2,3,4,5,6,7]);




                              // Exponential runtime - As we add more input, the runtime makes an exponential jump
function logAll(array) {      // Big O Notation: "O (n^2)"
  for (var i= 0; i < array.length; i++) {
    for(var j = 0; j < array.length; j++) {
      console.log(array[i] + array[j]);
    }
  }
}

logAll(['A','B','C']); // Logs 9 pairs
logAll(['A','B','C','D']); // Logs 16 pairs
logAll(['A','B','C','D','E']); // Logs 25 pairs




                                        // Logarithmic runtime - Fast for big datasets. As input size increases the number of operations dont grow proportionately, but grow logarithmically. Search by halving until you get the value
function binarySearch(array, key) {     // Big O Notation: "O (log n)"
  var low = 0;
  var high = array.length - 1;
  var mid;
  var element;

  while (low <= high) {
    mid = Math.floor((low + high) / 2, 10);
    element = array[mid];
    if (element < key) {
      low = mid + 1;
    } else if (element > key) {
      high = mid - 1;
    } else {
      return mid;
    }
    return -1;
  }
}
