//promises

// create the promise

var mypromise = new Promise((resolve,reject)=>{
    var isright = true
    if(isright == true){
        resolve("yes she is right")
    }else{
        reject("she is wrong")
    }
})
// handling the promise
mypromise
.then((result)=>{
    console.log(result);
})
.catch((result)=>{
    console.log(result);
})
.finally(()=>{
    console.log("code executed");
})

// try and catch


// try{
//     var k = fdsfsdfgh
//     console.log(k);
// }catch(error){
//     console.log("k will show errror");

// }
