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
// Handle shoes create on POST.
exports.shoes_create_post = async function(req, res) {
    console.log(req.body)
    let document = new shoes();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"shoes_type":"goat", "cost":12, "size":"large"}
    document.shoes_type = req.body.shoes_type;
    document.shoes_name= req.body.shoes_name;
    document.shoes_cost = req.body.shoes_cost;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
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