require('dotenv').config();

const express = require('express');
const expressLayout = require('express-ejs-layouts');
const { flash } = require('express-flash-message');
const session = require('express-session');

const connectDB = require('./server/config/db');

const app = express();
const port = 5000 || process.env.PORT;

// Connect to MongoDB Database
connectDB();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static Files
app.use(express.static('public'));

// Express Session
app.use(
    session({
        secret: 'secret',
        resave: false,
        saveUninitialized: true,
        cookies: {
            maxAge: 1000 * 60 * 60 * 24 * 7, // 1 Week
        }
    })
);

// Flash Messages
app.use(flash({ sessionKeyName: 'flashMessage' }));

// Set Template Engine
app.use(expressLayout);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

// Routes
app.use('/', require('./server/routes/customer'));

// Handle 404
app.get('*', (req, res) => {
    res.status(404).render('404')
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})