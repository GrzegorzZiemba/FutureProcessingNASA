const request = require("supertest");
const app = require("../routes/routes"); //reference to you app.js file

describe("GET /capsules", function () {
	it("should respond capsules", async function (done) {
		await request(app)
			.get("/capsules")
			.expect("Content-Type", /json/)
			.expect(200, done());
	});
});
