
// Create a method take that accepts a list/array and a number n, and returns a list/array array of the first n elements from the list/array.

// If you need help, here's a reference:

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice

///////////// Solution //////////////

function take(arr, n) {
    // Your code here
    var array = [];
    for(let i = 0; i < n; i++){
      if(arr.length > i){
      array.push(arr[i])
      }else{
        break
      }
    }
    return array
  }


  