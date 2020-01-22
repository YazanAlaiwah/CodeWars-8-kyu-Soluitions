// What we want to implement is a filter function, like Array.filter(), also similar to the _.filter() in underscore.js and lodash.js.

// The usage is quite simple, like:

// [1,2,3,4].filter((num)=>{ return num > 3})
// should output [4]

///////////// Solution //////////////

//nothing here, you will feel pretty awsome to write down by yourself
//have fun :)
Array.prototype.filter = function(num){
    var arr =[]
    for (let i = 0; i < this.length;i++){
      if(num(this[i])){
      arr.push(this[i])
      }
    }
    return arr
  }
  
  


