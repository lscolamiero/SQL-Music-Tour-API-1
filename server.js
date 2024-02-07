// DEPENDENCIES
const express = require('express');
const { Sequelize } = require('sequelize');
const app = express()

// CONFIGURATION / MIDDLEWARE
require('dotenv').config();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// CONTROLLERS
const bandsController = require('./controllers/bands_controller');
app.use('/bands', bandsController);

const eventsController = require('./controllers/events_controller');
app.use('/events', eventsController);

const stagesController = require('./controllers/stages_controller');
app.use('/stages', stagesController);

// Sequelize Connection
// const sequelize = new Sequelize({
//     storage: process.env.PG_URI,
//     dialect: 'postgres',
//     username: process.env.PG_USERNAME,
//     password: process.env.PG_PASSWORD,
// });

// try {
//     sequelize.authenticate();
//     console.log(`connected w/ Sequelize at ${process.env.PG_URI}`);
// } catch (err) {
//     console.log(`unable to connect to postgres: ${err}`);
// };

// ROOT
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to the Tour API'
    });
});

// LISTEN
app.listen(process.env.PORT, () => {
    console.log(`🎸 Rockin' on port: ${process.env.PORT}`)
});