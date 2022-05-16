const Capsule = require("../schemas/capsule");
const fetchItems = require("../utils/fetch");

const capsuleMongo = () => {
	return fetchItems
		.fetchCapsules()
		.then((result) => {
			result.data.forEach((el) => {
				const capsule = new Capsule({
					last_update: el.last_update,
					id: el.id,
					serial: el.serial,
					type: el.type,
				});

				Capsule.find({ id: el.id })
					.then((el) => {
						if (el.length === 0) {
							capsule.save();
						} else {
							return;
						}
					})
					.catch((err) => console.log(err));
			});
		})
		.catch((err) => console.log("Not Found Capsules - Check link"));
};

module.exports = {
	capsuleMongo: capsuleMongo,
};
