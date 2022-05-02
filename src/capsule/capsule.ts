import { getCapsules } from "../interfaces/capsuleInterface";
const request = require('request')
const connect = require('../mongodb/connect')

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

async function getDataFromDb() {
	await connect.capsuleData(null, null, null, null, data => collectedData = data)
	console.log("done")
	console.log(collectedData + ' db')
	return collectedData

}


async function getDataFromApi(data: any,callback) {
	let collectedData = [];
	console.log(data + 'data' + data.length)
	if(data == "Not Found"){
		collectedData = await getDataFromDb();
		console.log(collectedData + 'if')
	}
	else{
	await data.forEach((element) => {
		collectedData.push({
			last_update: element.last_update,
			id: element.id,
			serial: element.serial,
			type: element.type,
		});
		connect.capsuleData(
			element.last_update,
			element.id,
			element.serial,
			element.type,
			
		);
	});
}
	callback(collectedData)
}




