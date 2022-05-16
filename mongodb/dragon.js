const Dragon = require("../schemas/dragon");
const fetchItems = require("../utils/fetch");

const dragonMongo = () => {
	return fetchItems
		.fetchDragons()
		.then((result) => {
			result.data.forEach((el) => {
				const dragon = new Dragon({
					heatShield: el.heat_shield.material,
					dragonImage: el.flickr_images,
					first_flight: el.first_flight,
					id: el.id,
				});
				let flight = el.first_flight;
				Dragon.find({ first_flight: flight })
					.then((el) => {
						if (el.length === 0) {
							dragon.save();
						} else {
							return;
						}
					})
					.catch((err) => console.log(err));
			});
		})
		.catch((err) => console.log("Not Found Dragons - Check link"));
};

module.exports = {
	dragonsMongo: dragonMongo,
};
