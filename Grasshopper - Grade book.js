// Grade book
// Complete the function so that it finds the mean of the three scores passed to it and returns the letter value associated with that grade.

// Numerical Score	Letter Grade
// 90 <= score <= 100	'A'
// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60	'F'
// Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.






function getGrade (s1, s2, s3) {
    // Code here
    var r = (s1+s2+s3) / 3
    console.log(r)
    return r >= 90 && r <=100 ? 'A' : r >= 80 && r<90 ? 'B' : 70 <= r && r < 80 ? 'C' : 60<=r&&r<70?'D':'F'
  }






