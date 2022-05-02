const request = require('request')
const connect = require('../mongodb/connect')



const getData = ( callback, interface) => {
	const url = `https://api.spacexdata.com/v4/roaster`;
	
	request({ url, json: true }, (err, { body }) => {
		if (err) {
			console.log('Critical error')
		} 
		 else {
			getDataFromApi(body, callback, interface)
		}
	});
};
async function getDataFromDb(interface) {
	await connect.roadsterData(null, null, null, null,null, data => interface = data)
	console.log("done")
	console.log(interface + ' db')
	return interface

}


async function getDataFromApi(data: any,callback, interface) {
	let collectedData = [];

	if(data == "Not Found"){
		collectedData = await getDataFromDb(interface);
		console.log(collectedData + 'if')
	}
	else{
	if(data.length){
		await data.forEach((element) => {
			collectedData.push({
				...element
			});
			connect.capsuleData(
			...element
				
			);
		});
	}
	else{
		await collectedData.push(data.name, data.launch_date_utc, data.longitude, data.earth_distance_km, data.id, callback)
		console.log(data + " -.-,0,0")
		await connect.roadsterData(data.name, data.launch_date_utc, data.longitude, data.earth_distance_km, data.id, callback)
	}
	
}
	callback(collectedData)
}


module.exports = {
	getData: getData,
};
