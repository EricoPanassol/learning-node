const express = require('express');
const homeRoute = require('./routes/homeRoute'); 
const destinationRoute = require('./routes/destinationRoute');
const crewRoute = require('./routes/crewRoute');

const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));


app.use(homeRoute);
app.use(destinationRoute);
app.use(crewRoute);


app.listen(3000, () => {
  console.log('Server running on port 3000');
});

