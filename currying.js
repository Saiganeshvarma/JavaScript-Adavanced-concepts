// // // // currying 
// // // function outerFunction(){
// // //     var count = 0
// // //     function innerFunction(){
// // //         count++
// // //         console.log(count+1);
// // //     }
// // //     return innerFunction
// // // }
// // // var counter = outerFunction()
// // // counter()
// // // counter()
// // // counter()

// // function add(a){
// //     return function(b){
// //         return function(c){
// //             return a+b+c

// //         }
// //     }
// // }

// // console.log(add(10)(10)(10));

// function add(a,b){
//     return a+b
// }
// console.log(add(10,10));
// console.log(add(10,10));
// console.log(add(10,10));

var count = 0
function impure(value){
    count+= value
    return count
}
console.log(impure(10));
console.log(impure(10));
console.log(impure(10));