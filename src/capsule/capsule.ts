import { getCapsules } from "../interfaces/capsuleInterface";
const connect = require('../mongodb/connect')
let collectedData: getCapsules[] = [];

async function getDataFromApi(data: any, client) {
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
	
}



module.exports = {
	getDataFromApi: getDataFromApi,
};
