const request = require("request")

const url = ""

request({ url: url, json: true }, (error, response) => {
    if (error) {
        console.log("Unable to connect to the weather service");
    } else if (response.body.error) {
        console.log("Unable to find location");
    } else {
        const currentTemperature = response.body.current.temperature
        const feelsLikeTemperature = response.body.current.feelslike
        console.log(response.body.current.weather_descriptions[0] + ". The current temperature is: " + currentTemperature + " and it feels like: " + feelsLikeTemperature + " fahrenheit.");
    }
})

// Geocoding service
// address -> lat / lon -> weather

const geocodingUrl = ""
request({ url: geocodingUrl, json: true }, (error, response) => {
    if (error) {
        console.log("Unable to connect to the Geocoding service");
    } else if (response.body.features.length === 0) {
        console.log("Not a correct search location");
    } else {
        const lati = response.body.features[0].center[1]
        const longi = response.body.features[0].center[0]
        console.log("The coordinates are: " + lati + " " + longi);
    }
})