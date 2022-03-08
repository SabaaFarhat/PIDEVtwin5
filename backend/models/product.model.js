const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const productSchema = new Schema({
   nameProduct: {
    type: String,
    required: true,
    minlength: [3, 'product name Minimum 3 charachters.'],
  }, 
  category: {
      type: String
  },
}, {
  timestamps: true,
});


const Product = mongoose.model('Product', productSchema);

module.exports = Product;