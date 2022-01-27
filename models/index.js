// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category,{
  foreignKey: 'category_id'
});

// Categories have many Products
Category.hasMany(Product,{
  foreignKey: 'category_id',
});

// Products belongToMany Tags
Product.belongsToMany(Tag,{
  through: ProductTag,
  foreignKey: 'product_id',
  // onDelete: 'CASCADE'
});

// Tags belongToMany Products
Tag.belongsToMany(Product,{
  through: ProductTag,
  foreignKey: 'tag_id',
  // onDelete: 'CASCADE'
});


module.exports = {
  Category,
  Product,
  Tag,
  ProductTag
};
