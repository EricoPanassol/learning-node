const express = require('express');
const router = express.Router();


router.get('/destination', (req, res) => {
    res.redirect('/destination/moon');
});

router.get('/destination/moon', (req, res) => {
    res.render('destination-moon', { cat: 'Destination', title: 'Moon' });
});

router.get('/destination/mars', (req, res) => {
    res.render('destination-mars', { cat: 'Destination', title: 'Mars' });
});

router.get('/destination/europa', (req, res) => {
    res.render('destination-europa', { cat: 'Destination', title: 'Europa' });
});

router.get('/destination/titan', (req, res) => {
    res.render('destination-titan', { cat: 'Destination', title: 'Titan' });
});


module.exports = router;