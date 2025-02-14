// // //promises in the java script

// // // create the promise

// // var mypromise = new Promise((resolve,reject)=>{
// //     var isright = true
// //     if(isright == true){
// //         resolve("yes she is right")
// //     }else{
// //         reject("she is wrong")
// //     }
// // })
// // // handling the promise
// // mypromise
// // .then((result)=>{
// //     console.log(result);
// // })
// // .catch((result)=>{
// //     console.log(result);
// // })
// // .finally(()=>{
// //     console.log("code executed");
// // })

// //  //try and catch in java script


// // try{
// //   var k = fdsfsdfgh
// //    console.log(k);
// //  }catch(error){
// //      console.log("k will show errror");

// // }

// // map

// // var array = [1,2,3,4,5]
// // var newArray = array.map((item)=>{
// //     return item>10

// // })
// // console.log(newArray);

// // filter
// // var array = [1,2,3,4,5]
// // var newArray = array.filter((item)=>{
// //     return item>4
// // })
// // console.log(newArray);

// // find
// // var array = [1,2,3,4,5]
// // var newArray = array.find((item)=>{
// //     return item>4
// // })
// // console.log(newArray);

// // reduce
// // var array = [1,2,3,4,5]
// // var newArray = array.reduce((a,b)=>{
// //     console.log(a,b);
// //     return a+b
// // })
// // console.log(newArray);


// // foreach
// // var array = [1,2,3,4,5]
// // array.forEach((item)=>{
// //     console.log(item);
// // })
// // for(var i = 0 ; i<array.length ; i++){
// //     console.log(array[i]);
// // }

// // var a = 10
// // var a = 20 // redeclared the variable
// // a = 100 // reassigned the variable
// // console.log(a);

// // let a = 10
// // let a = 20 // redeclaration cannot
// // a = 100 // reasignement

// // const a = 10
// // const a = 40  redeclaration cannot
// //a = 20 reassigment cannot

// // string , tostring()
// var str = "java script"
// console.log(str.toString());
// // charat
// console.log(str.charAt(0));
// // tolowercase
// var str1 = "SAI GANESH"
// console.log(str1.toLowerCase());
// // to upper case
// var str2 = "sai ganesh"
// console.log(str2.toUpperCase());
// // indexof
// var str3 = "java script"
// console.log(str3.indexOf("j"));

// // startswith

// var str4 = "java script"
// console.log(str4.startsWith("java"));

// // ends with
// var str5 = "java script"
// console.log(str5.endsWith("pt"));

// /// slice
// var str6 = "coders"
// console.log(str6.slice(1,5));

// var array = [1,2,3,4,5]
// console.log(array.slice(0,3));

// // substring

// var str7 = "java script"
// console.log(str7.substring(1,4));
// // replace
// var str8 = "java script"
// console.log(str8.replace("script","c++"));

// // trim
// var str9 = "      sai ganesh varma       "
// console.log(str9.trim());

// // padStart

// var str10 = "sai"
// console.log(str10.padEnd(4,"java"));
// // padend
// console.log(str10.padEnd(9,"java"));
// // repeat
// var str12 = "sai"
// console.log(str12.repeat(100));
// // split
// var str13 = 'java script datas'
// console.log(str13.split(""));
// // concat

// var a = "java"
// var b = "script"
// console.log(a.concat(b));

// var str14 = "java script"
// console.log(str14.length);


// // reverse

// var rever = "java script"
// console.log(rever.split(" ").reverse().join(" "));


// call backs in the js
// function is passed as the argument to the another function


// function show(callback){
//     console.log("hello world");
//     callback()
// }

// function names(){
//     console.log("java script");
// }
// show(names)

// hosting in the js
// show()

// function show(){
//     console.log("iam the show function");
// }
// console.log(a);
// var a = 10
// console.log(a);
// let a = 10
// console.log(b);
// const b = 100

// scopes in the js
// global scope
// functional scope
// block scope

// Global scope
// var name = 'java script'
// function globalScope(){
//     console.log(name);
//     if(true){
//         console.log(name);
//     }
    
// }
// console.log(name);
// globalScope()

// functional scope

// function functionalScope(){
//     var myName = "java script"
//     console.log(myName);
//     if(true){
//         console.log(myName);
//     }
// }

// functionalScope()

// block scope

// function blockScope(){
//     if(true){
//         var block = "iam in the block"
//         console.log(block);
//     }
//     console.log(block);
// }
// blockScope()

// stack

class Stack{
    constructor(){
        this.item = []
        this.count = 0
    }
    push(element){
        this.item[this.count] = element
        console.log( ` and the element is ${element} and index value is ${this.count}`);
        this.count++
    }
    pop(){
        var deletedItem = this.item[this.count-1]
        console.log(` Deleted Item is ${deletedItem}`);
        this.count--
    }

}
var data = new Stack()
data.push(100)
data.push(200)
data.push(300)
data.push(400)
data.push(500)
data.pop()
data.pop()
data.pop()
data.pop()
data.pop()



var myPromise = new Promise((resolve,reject)=>{
    var condition = false
    if(condition == true){
        resolve("succesed")
    }else{
        reject("failed")
    }
})

myPromise
.then((result)=>{
    console.log(result);
})
.catch((error)=>{
    console.log(error);
})
.finally(()=>{
    console.log("The code executed");
})