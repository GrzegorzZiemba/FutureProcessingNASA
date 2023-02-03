module.exports = function (db, obj, model) {
	db.findOneAndUpdate(
		obj,
		model,
		{
			upsert: true,
			new: true,
			setDefaultsOnInsert: true,
		},
		function (err, result) {
			if (err) return;
		}
	);
};
