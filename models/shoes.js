const mongoose = require("mongoose")
const shoesSchema = mongoose.Schema({
 shoes_type: {type: String, minlength: 1, maxlength:30},
 shoes_name: {type: String, minlength: 1, maxlength:30},
 shoes_cost: {type: Number, min: 10, maxlength:15000}
})    
module.exports = mongoose.model("shoes",shoesSchema)