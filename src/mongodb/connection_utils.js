const mongoose = require("mongoose");

main().catch((err) => console.log(err));

async function main() {
	await mongoose.connect("mongodb://localhost:27017/test");
}
async function writeToDatabase(callback, argument, id, model) {
	let checkVal = 0;
	console.log("Doszedłem do Connection_utils !!");
	const findData = await model.find();
	findData.forEach((element) => {
		if (element.id == id) {
			checkVal = 1;
		}
	});
	if (checkVal == 0) {
		const Data = new model(argument);
		Data.save();
		callback(await model.find());
	}
}

async function getDatafromDatabase(callback, model) {
	const foundData = await model.find();
	callback(foundData);
}

module.exports = {
	getDatafromDatabase: getDatafromDatabase,
	writeToDatabase: writeToDatabase,
};
