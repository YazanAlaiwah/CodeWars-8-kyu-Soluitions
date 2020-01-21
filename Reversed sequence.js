//                       Description

// Get the number n (n>0) to return the reversed sequence from n to 1.

// Example : n=5 >> [5,4,3,2,1]

///////////// Solution /////////////


const reverseSeq = n => {
  var array = [];
  for(; n > 0; n--){
    array.push(n)
  }
  return array;
};



