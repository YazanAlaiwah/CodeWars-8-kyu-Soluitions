// Clock shows 'h' hours, 'm' minutes and 's' seconds after midnight.

// Your task is to make 'Past' function which returns time converted to miliseconds.

// #####Example:

// past(0, 1, 1) == 61000
// Note! h, m and s will be only Natural numbers! Waiting for translations and Feedback! Thanks!




function past(h, m, s){
    //#Happy Coding! ^_^
    var timeInSecods = s + (m * 60) + (h * 3600)
    return timeInSecods * 1000
  }








