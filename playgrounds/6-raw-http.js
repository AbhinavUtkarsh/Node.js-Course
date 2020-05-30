const http = require("http")
const url = "http://api.weatherstack.com/current?access_key=" + "" + "&query=" + encodeURIComponent(40) + "," + encodeURIComponent(-75)

const request = http.request(url, (response) => {
    let data = ""
    response.on("data", (chunk) => {
        data += chunk.toString()

    })
    response.on("end", () => {
        const body = JSON.parse(data)
        console.log(body);
    })
})

request.on("error", (error) => {
    console.log("An Error: ", error);
})

request.end()