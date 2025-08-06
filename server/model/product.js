const mongoose = require("mongoose")
const Schema = mongoose.Schema;
// const ObjectId = Schema.ObjectId;
 
const ProductsSchema = new Schema({
    coverImage: String,
    name: { type: String, required: true, max:[60, '最大60文字です']},
    price: Number,
    description: String,
    heding1: String,
    heding2: String,
    heding3: String,
    hedingtext1: String,
    hedingtext2: String,
    hedingtext3: String
});

module.exports = mongoose.model('Product', ProductsSchema)