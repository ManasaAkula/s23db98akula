var shoes = require('../models/shoes');
// List of all Shoes
exports.shoes_list = function(req, res) {
 res.send('NOT IMPLEMENTED: Shoes list');
};
// for a specific Shoes.
exports.shoes_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: Shoes detail: ' + req.params.id);
};
// Handle Shoes create on POST.
exports.shoes_create_post = function(req, res) {
 res.send('NOT IMPLEMENTED: Shoes create POST');
};
// Handle Shoes delete form on DELETE.
exports.shoes_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: Shoes delete DELETE ' + req.params.id);
};
// Handle Shoes update form on PUT.
exports.shoes_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: Shoes update PUT' + req.params.id);
};