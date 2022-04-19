import { getCapsules } from "../interfaces/capsuleInterface";
const request = require('request')
const connect = require('../mongodb/connect')
const { MongoClient } = require("mongodb");

const uri = "mongodb://localhost:27017/?readPreference=primary&ssl=false";
const client = new MongoClient(uri);
let collectedData: getCapsules[] = [];

exports.getcapsule = ( callback) => {
	const url = `https://api.spacexdata.com/v4/capsules`;
	request({ url, json: true }, (err, { body }) => {
		if (err) {
			console.log('Critical error')
		} 
		 else {
			getDataFromApi(body, callback)
		}
	});
};



async function getDataFromApi(data: any,callback) {
	console.log(typeof data);
	// console.log(data)
	await data.forEach((element) => {
		collectedData.push({
			last_update: element.last_update,
			id: element.id,
			serial: element.serial,
			type: element.type,
		});
		connect.getInto(
			element.last_update,
			element.id,
			element.serial,
			element.type,
			client
		);
	});
	callback(collectedData)
}




