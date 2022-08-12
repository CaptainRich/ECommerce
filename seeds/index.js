// Bring in all of the "seed" files
const seedCategories  = require('./category-seeds');
const seedProducts    = require('./product-seeds');
const seedTags        = require('./tag-seeds');
const seedProductTags = require('./product-tag-seeds');

const sequelize       = require('../config/connection');


// Define the "seed" function.
const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedCategories();
  console.log('\n----- CATEGORIES SEEDED -----\n');

  await seedProducts();
  console.log('\n----- PRODUCTS SEEDED -----\n');

  await seedTags();
  console.log('\n----- TAGS SEEDED -----\n');

  await seedProductTags();
  console.log('\n----- PRODUCT TAGS SEEDED -----\n');

  process.exit(0);      // Tells node.js to exit synchronously, with an exit code of 0.
};


// Invoke the "seed" function
seedAll();
