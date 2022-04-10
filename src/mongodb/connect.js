const { MongoClient } = require("mongodb");

const uri = "mongodb://localhost:27017/?readPreference=primary&ssl=false";
const client = new MongoClient(uri);

async function main() {
	try {
		await client.connect();

		await listDatabases(client);
	} catch (e) {
		console.error(e);
	}
	// finally {
	//     await client.close();
	// }
}
main().catch(console.error);

async function getInto(last_update, id, serial, type) {
	const doc = { last_update, id, serial, type };
	console.log("to jest ____------------- " + client);
	await client.db().collection("NewaDb").insertOne(doc);
	console.log(`A document was inserted with the _id: ${result.insertedId}`);
}

module.exports = {
	client: client,
	getInto: getInto,
};
