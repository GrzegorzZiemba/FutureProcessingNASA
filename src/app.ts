const express =require('express')
const request = require('request')
const path = require('path')
const setVariable = require('./utils/setVariables')


const app = express();


//setting express for static files like css in ejs view engine
app.use(express.static(path.join(__dirname, "public")))

// setting ejs as view engine https://ejs.co/#docs
app.set("view engine", "ejs");
app.set("views", "views");
const capsuleRoutes = require('./routes/capsuleRoute')


app.use(capsuleRoutes)

app.listen(3000)