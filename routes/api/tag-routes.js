const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

////////////////////////////////////////////////////////////////////////////////
router.get('/', (req, res) => {
  // Find all tags, including any associated product data
  
  Tag.findAll({
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

////////////////////////////////////////////////////////////////////////////////
router.get('/:id', (req, res) => {
  // Find a single tag by its `id`, including any associated product data

  Tag.findOne({
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

////////////////////////////////////////////////////////////////////////////////
router.post('/', (req, res) => {
  // Create a new tag
  Tag.create({
    tag_name: req.body.tag_name
  })
  .then(dbData => res.json(dbData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

////////////////////////////////////////////////////////////////////////////////
router.put('/:id', (req, res) => {
  // Update a tag's name by its `id` value
  Tag.update(
    {
      tag_name: req.body.tag_name
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

////////////////////////////////////////////////////////////////////////////////
router.delete('/:id', (req, res) => {
  // Delete on tag by its `id` value
  Tag.destroy( {
    where: {
      id: req.params.id
    }
  })
  .then(dbData => {
    if (!dbData) {
      res.status(404).json({ message: 'No Tag found with this id' });
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
