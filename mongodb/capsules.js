const Capsule = require("../schemas/capsule");
const fetchItems = require("../service/spaceX");
const log = require("../service/logger");
const dbSaver = require("./dbSaver");

const capsuleMongo = async () => {
	const { data } = await fetchItems.fetchCapsules();

	try {
		return await data.forEach((element) => {
			const capsule = new Capsule({
				lastUpdate: element.last_update,
				id: element.id,
				serial: element.serial,
				type: element.type,
			});
			const obj = {
				id: element.id,
			};
			dbSaver(Capsule, obj, capsule);
		});
	} catch (err) {
		log.info(err.message);
	}
};

module.exports = {
	capsuleMongo: capsuleMongo,
};
