const router = require('express').Router();
const { Category, Product, Tag } = require('../../models');

// The `/api/categories` endpoint
router.get('/', (req, res) => {
  // find all products
  // be sure to include its associated Category and Tag data
  Category.findAll()
    .then(dbCategoryData => res.json(dbCategoryData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// GET /api/category/1
router.get('/:id', (req, res) => {
  Category.findOne({
    attributes: { exclude: ['category_id'] },
    where: {
      id: req.params.id
    },
    // include: [
    //   {
    //     model: Product,
    //     attributes: ['id', 'product_name', 'price', 'stock']
    //   },
    //   {
    //     model: Tag,
    //     attributes: ['product_name'],
    //     through: Tag,
    //     as: 'product_tag'
    //   }
    // ]
  })
    .then(dbCategoryData => {
      if (!dbCategoryData) {
        res.status(404).json({ message: 'No category found with this id' });
        return;
      }
      res.json(dbCategoryData);
    })

    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// POST /api/category
router.post('/', (req, res) => {
  // expects {category_name: 'Shirts'}
  Category.create({
    category_name: req.body.category_name
  })
    .then(dbCategoryData => res.json(dbCategoryData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// PUT /api/categories/1
router.put('/:id', (req, res) => {
  // expects {category: 'Shirts'}

  // if req.body has exact key/value pairs to match the model, you can just use `req.body` instead
  Category.update(req.body, {
    where: {
      id: req.params.id
    }
  })
    .then(dbCategoryData => {
      if (!dbCategoryData[0]) {
        res.status(404).json({ message: 'No category found with this id' });
        return;
      }
      res.json(dbCategoryData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// DELETE /api/categories/1
router.delete('/:id', (req, res) => {
  Category.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbCategoryData => {
      if (!dbCategoryData) {
        res.status(404).json({ message: 'No category found with this id' });
        return;
      }
      res.json(dbCategoryData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;