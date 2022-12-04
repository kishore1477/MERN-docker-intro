//to run : node filename.js
const express = require('express')
var bodyParser = require('body-parser')
const cors = require("cors");
const app = express()
app.use(express.json())
// app.use(cors({
//     'allowedHeaders': ['sessionId', 'Content-Type'],
//     'exposedHeaders': ['sessionId'],
//     'origin': '*',
//     'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
//     'preflightContinue': false
//   }));
app.use(cors())
const port = 5000
app.use(bodyParser.json())
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))

app.get('/', (req, res) => {
   
    // res.send("Kuchh")
    return  res.status(200).json({"data":'Hello World! This is kishore kumar  jaipal'})
})

