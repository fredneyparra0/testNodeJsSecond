const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('server run yeahhhh')
});

app.get('/contact', (req, res) => {
  res.send('contact me for fredneyparra0@gmail.com')
})

exports.module = router;