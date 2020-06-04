const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (a < 0 || b < 0) {
                return reject("Can't add them buddy")
            }
            resolve(a + b)
        }, 2000)
    })
}


// this reduces the need to do 
//promise chaining as it shortens the syntax even tho 
//the time taken for this to run 
//would be same as of promise chaining it's still very useful
const doWork = async () => {
    const sum = await add(1, -99)
    const sum2 = await add(sum, 50)
    const sum3 = await add(sum2, -3)
    return sum3
}


// console.log(doWork());
doWork().then((result) => {
    console.log("Result: ", result);
}).catch((e) => {
    console.log("Error: ", e);
})