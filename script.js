// //promises in the java script

// // create the promise

// var mypromise = new Promise((resolve,reject)=>{
//     var isright = true
//     if(isright == true){
//         resolve("yes she is right")
//     }else{
//         reject("she is wrong")
//     }
// })
// // handling the promise
// mypromise
// .then((result)=>{
//     console.log(result);
// })
// .catch((result)=>{
//     console.log(result);
// })
// .finally(()=>{
//     console.log("code executed");
// })

//  //try and catch in java script


// try{
//   var k = fdsfsdfgh
//    console.log(k);
//  }catch(error){
//      console.log("k will show errror");

// }

// map

// var array = [1,2,3,4,5]
// var newArray = array.map((item)=>{
//     return item>10

// })
// console.log(newArray);

// filter
// var array = [1,2,3,4,5]
// var newArray = array.filter((item)=>{
//     return item>4
// })
// console.log(newArray);

// find
// var array = [1,2,3,4,5]
// var newArray = array.find((item)=>{
//     return item>4
// })
// console.log(newArray);

// reduce
// var array = [1,2,3,4,5]
// var newArray = array.reduce((a,b)=>{
//     console.log(a,b);
//     return a+b
// })
// console.log(newArray);


// foreach
// var array = [1,2,3,4,5]
// array.forEach((item)=>{
//     console.log(item);
// })
// for(var i = 0 ; i<array.length ; i++){
//     console.log(array[i]);
// }
