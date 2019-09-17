require("dotenv").config()
const express = require("express");
const massive = require("massive");

const app = express()
app.use(express.json())

const {CONNECTING_STRING, SERVER_PORT} = process.env

app.get("/movie/api", (req, res) => {
    const db = req.app.get("db")
    db.getAllMovies().then(Response =>{
        res.status(200).json(Response)
    })
})


massive(CONNECTING_STRING).then(db => {
    app.set("db",db)
    console.log("Database Connected")
}).catch(error => console.log(error, "database did not connect"))


app.listen(SERVER_PORT, () => console.log(`Listening on ${SERVER_PORT}`))