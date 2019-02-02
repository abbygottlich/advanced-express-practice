let products = require("../products");

// GET request
exports.list = function list(request, response) {
    return response.json(products);
}

// GET with an ID
exports.show = function show(request, response) {
    return response.json({ theId: request.params.id });
}

// POST request
exports.create = function create(request, response) {
    return response.json({});
}

// PUT request
exports.update = function update(request, response) {
    return response.json({ theId: request.params.id });
}

// DELETE request
exports.remove = function remove(request, response) {
    return response.json({});
}