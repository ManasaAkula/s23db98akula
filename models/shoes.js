const mongoose = require("mongoose")
const shoesSchema = mongoose.Schema({
shoes_type: String,
shoes_name: String,
shoes_cost: Number
})
module.exports = mongoose.model("shoes",shoesSchema)