const { MongoClient } = require("mongodb");

const uri = "mongodb://localhost:27017/?readPreference=primary&ssl=false";
const client = new MongoClient(uri);

async function main() {
	try {
		await client.connect();
	} catch (e) {
		console.error(e);
	}
}
main().catch(console.error);

async function getInto(last_update, id, serial, type) {
	const doc = { last_update, id, serial, type };

	console.log(doc.id);
	client
		.db()
		.collection("ThatDb")
		.find({})
		.toArray(function (err, result) {
			if (err) throw err;
			let checkVal = 0;
			result.forEach((element) => {
				if (element.id == doc.id) {
					console.log("Pasuje");
					console.log(element.id);
					console.log(doc.id);
					checkVal = 1;
					return;
				}
			});
			if (checkVal == 1) {
				return;
			} else {
				console.log("Tworze baze :)");
				putIntoDb();
			}
		});

	async function putIntoDb() {
		await client.db().collection("ThatDb").insertOne(doc);
	}

	// }
}

module.exports = {
	client: client,
	getInto: getInto,
};
