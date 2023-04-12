var shoes = require('../models/shoes');
// List of all Shoes
// List of all shoes
exports.shoes_list = async function(req, res) {
    try{
    theshoes = await shoes.find();
    res.send(theshoes);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
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

// VIEWS
// Handle a show all view
exports.shoes_view_all_Page = async function(req, res) {
    try{
    theshoes = await shoes.find();
    res.render('shoes', { title: 'shoes Search Results', results: theshoes });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };