// All of the animals are having a feast! Each animal is bringing one dish. 
// There is just one rule: the dish must start and end with the same letters as
//  the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.

// Write a function feast that takes the animal's name and dish as arguments and 
// returns true or false to indicate whether the beast is allowed to bring the dish to the feast.

// Assume that beast and dish are always lowercase strings, and that each has at 
// least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.


///////////// Solution //////////////

function feast(beast, dish) {
    //your function here
    return beast[0] === dish[0] && beast[beast.length-1] === dish[dish.length-1]
    }
let arr = [1,2,3,4,5,6,7,8,9]
let isEven = (num) =>{
  return new Promise((resolve,reject)=>{
    if(num%2===0){resolve(true)}
    else{reject(false)}
  })
}
let consolePromiseResult = (num,data)=>{
  console.log(num,data)
}

let isEvenArr = (arr,callBack1,callBack2)=>{
  for(let i = 0; i < arr.length;i++){
    callBack2(arr[i]).then(data=>callBack1(arr[i],data)).catch(err=>callBack1(arr[i],err))
  }
}
isEvenArr(arr,consolePromiseResult,isEven)





