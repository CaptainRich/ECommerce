const router    = require('express').Router();
const apiRoutes = require('./api');  

router.use('/api', apiRoutes);            // prepends '/api' in front of all routes

router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")       // Safety net incase someone tries "http://localhost:3001"
});

module.exports = router;