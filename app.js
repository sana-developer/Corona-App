const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

// ... (other middleware and configurations)

// Set the template engine as Pug and specify the views directory
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use('/static',express.static('static'));//for serving static files

// Define a route to render the 'index.pug' template
app.get('/', (req, res) => {
    res.status(200).render('index'); // No need to specify the file extension
});
app.get('/fever', (req, res) => {
    res.render('fever');
  });
  
  app.get('/propability', (req, res) => {
    res.render('propability');
  });
  
  app.get('/covidInfo', (req, res) => {
    res.render('covidInfo');
  });
// ... (other routes and server setup)

app.listen(port, () => {
    console.log(`The application started successfully on port ${port}`);
});
