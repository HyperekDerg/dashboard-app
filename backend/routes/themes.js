
const { Router } = require('express');
const router = Router();
const db = require('../helpers/database');

/**
 * Functions
 */

function validateAuthToken(req, res, next){
    const { authorization } =req.headers;
    if (authorization && authorization === process.env.AUTH_TOKEN){
        next();
    } else {
        res.status(403).send({msg: 'Forbidden. Incorrect Auth Token'})
    }
};


router.post('/', validateAuthToken, async (req, res) => {
    try {
        const result = await db.promise().query(`SELECT theme_name FROM themes JOIN selected_theme ON themes.id = selected_theme.selected_theme_id;
        `); 
        const selected_theme = result[0][0]['theme_name'];
        res.status(200).send({'default-theme': "dark-theme", 'selected-theme': selected_theme});
    } catch {
        console.log(err);
    }
});

router.post('/update/:themeID', validateAuthToken, (req, res) => {
    const { themeID } = req.params;
    try {
        db.promise().query(`UPDATE selected_theme  SET selected_theme_id = ${themeID};`);
        res.status(201).send('New Theme set.')
    } catch {
        console.log(err);
        res.status(400).send('Theme is not udpated!');
    }
});

module.exports = router;





// function validateCookie(req, res, next){
//     const { cookies }= req;
//     if ('session_id' in cookies) {
//         console.log('session exists');
//         if (cookies.session_id === '123456') {
//             next();
//         } else {
//             res.status(403).send({msg: 'Not Authenticated'});
//         }
//     } else {
//         res.status(403).send({msg: 'Not Authenticated'});
//     }
// };


// app.get('/users', (req, res) => {
//     const user = req.body;
//     users.push(user);
//     res.status(200).send('Created user');
// });

// app.get('/users/:username', (req, res) => {
//     const { username } = req.params;
//     const user = users.find((user) => user.username === username);
//     if (user) res.status(200).send(user);
//     else res.status(404).send('Not found');
// });

// app.post('/login', (req, res) => {
//     const { username, password } = req.body;
//     if (username && password) {
//         if(req.session.authenticated) {
//             res.json(req.session)
//         } else {
//             if (password === '123') {
//                 req.session.authenticated = true;
//                 req.session.user = { username, password };
//                 res.json(req.session);
//             } else {
//                 res.status(403).json({msg: 'Bad Credentials'});
//             }
//         }
//     } else res.status(403).json({msg: 'Bad Credentials'}); 
// });

// app.get('/signin', validateAuthToken, (req, res) => {
//     res.cookie('session_id', '123456');
//     res.status(200).send({msg: 'Logged in.'});
// });
