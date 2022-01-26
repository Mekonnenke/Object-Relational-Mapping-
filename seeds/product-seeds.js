const { Product } = require('../models');

const productData = [
  {
    product_name: 'Plain T-Shirt',
    price: 14.99,
    stock: 14,
    category_id: 1,
  },
  {
    product_name: 'Running Sneakers',
    price: 90.0,
    stock: 25,
    category_id: 5,
  },
  {
    product_name: 'Branded Baseball Hat',
    price: 22.99,
    stock: 12,
    category_id: 4,
  },
  {
    product_name: 'Top 40 Music Compilation Vinyl Record',
    price: 12.99,
    stock: 50,
    category_id: 3,
  },
  {
    product_name: 'Cargo Shorts',
    price: 29.99,
    stock: 22,
    category_id: 2,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;

// INSERT INTO product 
// (product_name, price, stock, category_id)
// VALUES
//    ("Plain T-Shirt", "14.99", "14", "1"),
//    ("Running Sneakers", "90.00", "25", "5"),
//    ("Branded Baseball Hats", "22.99", "12", "4"),
//    ("Top 40 Music Compilation Vinyl Record", "12.99", "50", "3"),
//    ("Cargo Shorts", "29.99", "22", "2");y
