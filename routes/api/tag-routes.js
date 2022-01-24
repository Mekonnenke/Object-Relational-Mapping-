
const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

// find all tags
// be sure to include its associated Product data
router.get("/", (_req, res) => {
  Tag.findAll({
     include: [{model:Product, through: ProductTag}],
  })
    .then((Tag) => res.status(200).json(Tag))
    .catch((err) => res.status(400).json(err));
});

// find a single tag by its `id`
// be sure to include its associated Product data
router.get("/:id", (req, res) => {
  console.log(req.params);

  Tag.findOne({
    where: {
      id: req.params.id,
      include: [{model:Product, through: ProductTag}],
    },
  })

    .then((category) => res.status(200).json(category))
    .catch((err) => res.status(400).json(err));
});


router.post("/", (req, res) => {
  Tag.create(req.body)
    .then((tag) => res.status(200).json(tag))
    .catch((err) => res.status(400).json(err));
});

// update a tag's name by its `id` value
router.put("/:id", (req, res) => {
  Tag.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((tag) => res.status(200).json(tag))
    .catch((err) => res.status(400).json(err));
});

// delete on tag by its `id` value
router.delete("/:id", (req, res) => {
  Tag.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((tag) => res.status(200).json(tag))
    .catch((err) => res.status(400).json(err));
});

module.exports = router;