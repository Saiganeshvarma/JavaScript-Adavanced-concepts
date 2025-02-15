// // var myPromise = new Promise((resolve,reject)=>{
// //     var condition = true
// //     if(condition == true){
// //         resolve("success")
// //     }else{
// //         reject("failed")
// //     }
// // })
// // myPromise
// // .then((result)=>{
// //     console.log(result);
// // })
// // .catch((result)=>{
// //     console.log(result);
// // })

// fetch('https://fakestoreapi.com/productsinavlidurl')
// .then((response)=>{
//     if(!response.ok){
//         console.log("invalid api ");
//     }
//     return response.json()
// })

// .then((result)=>{
//     console.log(result);
// })
// .catch(()=>{
//     console.log("error in the url");
// })


async function fecthData(){
    try{
        var response = await fetch('https://fakestoreapi.com/products')
        if(!response.ok){
            console.log("error in the api");
        }
        var data = await response.json()
        console.log(data);
    }catch{
        console.log("no data in the api");
    }
    
}
fecthData()