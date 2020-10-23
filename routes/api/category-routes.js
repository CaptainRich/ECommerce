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
});

///////////////////////////////////////////////////////////////////////////////////////
router.post('/', (req, res) => {
  // create a new category
});

///////////////////////////////////////////////////////////////////////////////////////
router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

///////////////////////////////////////////////////////////////////////////////////////
router.delete('/:id', (req, res) => {
  // Delete a category by its `id` value
  Category.destroy( {
    where: {
      id: req.params.id
    }
  })
});


module.exports = router;
