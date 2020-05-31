const path = require("path")
const express = require("express")

const app = express()

// Define paths for Express config
const publicDir = path.join(__dirname, "../public")
const viewsPath = path.join(__dirname, "../templates")

// Setup handlebars engine and views location
app.set("view engine", "hbs")
app.set("views", viewsPath)

// setup static directory to serve
app.use(express.static(publicDir))

app.get("", (req, res) => {
    res.render('index', {
        title: "Weather",
        name: "dev kitty"
    })
})

app.get("/about", (req, res) => {
    res.render("about", {
        title: "About Me",
        name: "dev Kitty"
    })
})

app.get("/help", (req, res) => {
    res.render("help", {
        helpText: "May the force be with you"
    })
})

app.listen(3005, () => {
    console.log("Server is up and running on port 3005")
})