const Dragon = require("../schemas/dragon");
const fetchItems = require("../service/spaceX");
const log = require("../service/logger");
const dbSaver = require("./dbSaver");
const dragonMongo = async () => {
	const { data } = await fetchItems.fetchDragons();
	try {
		return await data.forEach((element) => {
			const dragon = new Dragon({
				heatShield: element.heat_shield.material,
				dragonImage: element.flickr_images,
				firstFlight: element.first_flight,
				id: element.id,
			});
			let flight = element.first_flight;

			const obj = {
				firstFlight: flight,
			};
			dbSaver(Dragon, obj, dragon);
		});
	} catch (error) {
		log.info(error, "more on this: %s", msg);
	}
};

// I know THAT I CANNOT USE COMMENTS - but that's the result of my previous achivments ;D
// return fetchItems
// 	.fetchDragons()
// 	.then((result) => {
// 		result.data.forEach((el) => {
// 			const dragon = new Dragon({
// 				heatShield: el.heat_shield.materiaxwl,
// 				dragonImage: el.flickr_images,
// 				firstFlight: el.first_flight,
// 				id: el.id,
// 			});
// 			let flight = el.first_flight;

// 			Dragon.findOneAndUpdate(
// 				{ firstFlight: flight },
// 				dragon,
// 				{
// 					upsert: true,
// 					new: true,
// 					setDefaultsOnInsert: true,
// 				},
// 				function (err, result) {
// 					if (err) return;
// 				}
// 			);
// 		});
// 	})
// 	.catch((err) => log.info("err"));

module.exports = {
	dragonsMongo: dragonMongo,
};
