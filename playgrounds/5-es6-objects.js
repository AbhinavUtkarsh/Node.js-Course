// object property shorthand


const name = "Andrew"

const userAge = 27

const user = {
    name,
    age: userAge,
    location: "Philadelphia"
}

console.log(user);


// object destructuring

const product = {
    label: "Red Notebook",
    price: 3,
    stock: 201,
    salePrice: undefined,
    rating: 872349
}

// this is a lot of code
// const label = product.label
// const stock = product.stock


// this was destructuring
// const { label: productLabel, stock, rating = 10 } = product
// console.log(productLabel, stock, rating);

const transaction = (type, { label, stock }) => {
    console.log(label, stock, type);
}

transaction("order", product)

const transaction2 = (type, { label, stock = 0 } = {}) => {
    console.log(label, stock, type);
}

transaction2("order", product)