// Given a number n, draw stairs using the letter "I", n tall and n wide, with the tallest in the top left.

// For example n = 3 result in "I\n I\n I", or printed:

// I
//  I
//   I
// Another example, a 7-step stairs should be drawn like this:

// I
//  I
//   I
//    I
//     I
//      I
//       I

///////////// Solution //////////////

function drawStairs(n) {
    var string = "I\n "
    var resulte = "" ;
    for(let i = 1; i <= n; i++){
      if( i === n){break }
      resulte += string
      string += " "
    }
    return resulte += "I"
  }






