// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// // Patrick Feeney => P.F

///////////// Solution //////////////

function abbrevName(name){
    var array = name.toUpperCase().split(" ")
    return array[0][0] + '.' + array[1][0]
      // code away
  
  }




