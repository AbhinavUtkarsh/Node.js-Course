// const doWorkPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject("Things went wrong")
//         //resolve([7, 5, 1])
//     }, 2000)
// })

// doWorkPromise.then((result) => {
//     console.log("Success!", result);
// }).catch((error) => {
//     console.log(error);
// })


//
//                               fulfilled
//                              /
// Promise      -- pending --> 
//                              \
//                               rejected
//

const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b)
        }, 2000)
    })
}

// add(1, 2).then((sum) => {
//     console.log(sum);
//     add(sum, 4).then((sum2) => {
//         console.log(sum2);
//     }).catch((e) => {
//         console.log(e);
//     })
// }).catch((error) => {
//     console.log(error);
// })


// promise chaining

add(1, 2).then((sum) => {
    console.log(sum);
    return add(sum, 4)
}).then((sum2) => {    // works when 1st promise is returned
    console.log(sum2);
}).catch((error) => {
    console.log(error);
})