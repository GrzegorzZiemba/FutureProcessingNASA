// const express =require('express')


const request = require('request')

const setVariable = require('./utils/setVariables')
const capsule = require('./capsule/capsule')
const connect = require('./mongodb/connect')

// const app = express()
connect


request('https://api.spacexdata.com/v4/capsules', (error, response, body) => {
    console.log(error)
    var set = setVariable(JSON.parse(body));
    console.log("connect" + connect.client)
    capsule.getDataFromApi(set, connect.client)
    
   

})





// app.listen(3000)