const fs = require("fs")
// const book = {
//     title: "Half Girlfriend",
//     author: "Chetan Bhagat"
// }

// const bookJSON = JSON.stringify(book)
// fs.writeFileSync("1-json.json", bookJSON)

// const data_buffer = fs.readFileSync("1-json.json")
// const data = JSON.parse(data_buffer)

// console.log(data.title);

const data_buffer = fs.readFileSync("1-json.json")
const data = data_buffer.toString()
const user = JSON.parse(data)

user.name = "Abhinav"
user.age = 20
const userJSON = JSON.stringify(user)

fs.writeFileSync("1-json.json", userJSON)