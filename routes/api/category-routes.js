
// Dependencies
const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint
///////////////////////////////////////////////////////////////////////////////////////
router.get('/', (req, res) => {
  // Find all categories with their associated Products

  Category.findAll({
    include: [
      {
        model: Product
      }
    ]
  })
  .then( dbData => res.json(dbData) )
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

///////////////////////////////////////////////////////////////////////////////////////
router.get('/:id', (req, res) => {
  // Find one category by its `id` value, with its associated Products

  Category.findOne({
    where: {
      id: req.params.id
    },
    include: [
      {
        model: Product
      }
    ]
  })
  .then( dbData => res.json(dbData) )
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

///////////////////////////////////////////////////////////////////////////////////////
router.post('/', (req, res) => {
  // Create a new category
  Category.create({
    category_name: req.body.category_name
  })
  .then(dbData => res.json(dbData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

///////////////////////////////////////////////////////////////////////////////////////
router.put('/:id', (req, res) => {
  // Update a category by its `id` value
  Category.update(
    {
      category_name: req.body.category_name
    },
    {
      where: {
        id: req.params.id
      }
    })
    .then(dbData => res.json(dbData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

///////////////////////////////////////////////////////////////////////////////////////
router.delete('/:id', (req, res) => {
  // Delete a category by its `id` value
  Category.destroy( {
    where: {
      id: req.params.id
    }
  })
  .then(dbData => {
    if (!dbData) {
      res.status(404).json({ message: 'No Category found with this id' });
      return;
    }
    res.json(dbData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
});


module.exports = router;
