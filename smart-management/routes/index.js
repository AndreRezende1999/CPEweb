var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { title: 'Express', layout:'layout.hbs' });
});

/* GET Login page. */
router.get('/login', (req, res)=> {
  res.render('login', { title: 'Login', layout:'layout.hbs' });
});

module.exports = router;
