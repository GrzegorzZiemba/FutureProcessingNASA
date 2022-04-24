async function getDatafromDatabase(dbName, callback, client) {
	await client
		.db()
		.collection(dbName)
		.find()
		.toArray()
		.then((each) => {
			callback(each);
			console.log("Done Async");
		});
}

async function writeToDatabase(dbName, client, checking_id, argument) {
	client
		.db()
		.collection(dbName)
		.find({})
		.toArray(function (err, result) {
			if (err) throw err;
			let checkVal = 0;
			result.forEach((element) => {
				if (element.id == checking_id) {
					checkVal = 1;
					return;
				}
			});
			if (checkVal == 1) {
				return;
			} else {
				putIntoDb();
			}
		});

	async function putIntoDb() {
		await client.db().collection(dbName).insertOne(argument);
	}
}
module.exports = {
	getDatafromDatabase: getDatafromDatabase,
	writeToDatabase: writeToDatabase,
};
