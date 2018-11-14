const express = require('express');
const app = express();
const path = require('path');
const routes = require('./routes/index');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const colors = require('colors');

app.set('port', process.env.PORT || 3000);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extende: false}));

(routes)(app);

app.listen(3000, () => {
    console.log(`Server\'s working on port ${app.get('port')}`.cyan);
});