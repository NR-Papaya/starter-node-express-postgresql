const categoriesService = require("./categories.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

function list(req, res, next) {
	categoriesService
		.list()
		.then((data) => res.json({ data }))
		.catch(next);
}

module.exports = {
	list: asyncErrorBoundary(list),
};
