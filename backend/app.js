const express = require('express');
const dotenv = require('dotenv');
const themeRoute = require('./routes/themes');
/**
 * Import env settings and set all variables
 */

dotenv.config({path: '.env'});
const PORT  = process.env.PORT || '3000';
const app = express();

/**
 * Middlewares
 */

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
    console.log(`${req.method} - ${req.url}`);
    next();
});

/**
 * Routes
 */

app.get('/', (req, res) => {
    res.status(200).json({'API status': 'Connected'})
});

app.use('/themes', themeRoute);


/**
 * Start server
 */

app.listen(PORT, () => console.log(`API listening on port ${PORT}`));