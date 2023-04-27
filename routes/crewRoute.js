const express = require('express');
const router = express.Router();

router.get('/crew', (req, res) => {
    res.redirect('/crew/commander');
});

router.get('/crew/commander', (req, res) => {
    res.render('crew-commander', { cat: 'Crew', title: 'Commander' });
})

module.exports = router;