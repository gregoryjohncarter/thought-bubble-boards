const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');

// define app as the express server and set the port
const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// set up the session parameters to use cookies and pass an object with a session
const sess = {
    secret: 'store the pass here Secretly',
    cookie: {
        expires: 3600000
    },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

// use the session from express session / connect session sequelize with express
app.use(session(sess));

const helpers = require('./utils/helpers');

const hbs = exphbs.create({ helpers });

// set the express engine to use handlebars with helper functions
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// set express to run using json format, use the public path for static pages, and return parsed objects from req
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// enable using routes
app.use(routes);

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});

