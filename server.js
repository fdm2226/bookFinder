const express = require('express');
const exphbs = require('express-handlebars');

const app = express();
const hbs = exphbs.create({ defaultLayout: 'main' });

app.engine('handlebars', hbs.engine);
 
app.set('view engine', 'handlebars');

app.use(express.static('public'));

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.render('home');
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});