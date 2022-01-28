const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  Category.findAll({
    include:
    [
      {
        model: Product,
      }
    ]
  }).then(dbCategoryData=>
    res.json(dbCategoryData))
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    });
});

router.get('/:id', (req, res) => {
  Category.findOne({
    where:
    {
      id: req.params.id
    },
    include:
    [
      {
        model: Product
      }
    ]
  }).then(dbCategoryData=>{
    if (!dbCategoryData) {
      res.status(404).json({ message: 'No category found with this id' });
      return;
    }
    res.json(dbColorData);
  })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});
// expects {catgory_name: 'Shoe'}
router.post('/', (req, res) => {
  Category.create(req.body)
    .then(dbCategorydata=> res.json(dbCategorydata))
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    });
});

router.put('/:id', (req, res) => {
  // expects {catgory_name: 'Shoe'}
  Category.update(req.body,{
    where:
    {
      id: req.params.id
    }
  })
    .then(dbCategoryData => {
      if (!dbCategoryData[0]) {
        res.status(404).json({ message: 'No categoryfound with this id' });
        return;
      }
      res.json(dbCategoryData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// DELETE /api/makes/1
// DELETE /api/makes/1
router.delete('/:id', (req, res) => {
  Category.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbCategoryData => {
      if (!dbCategoryData) {
        res.status(404).json({ message: 'No  category found with this id' });
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