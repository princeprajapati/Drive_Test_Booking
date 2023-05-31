const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const driverLicense_Info = require('./models/driverDetails');
const bodyParser = require('body-parser');

const session = require('express-session');
const ejs = require('ejs');

mongoose.connect('mongodb+srv://prince2316:1234@cluster0.c13fbt4.mongodb.net/?retryWrites=true&w=majority');

const authenticateMiddleware = require('./middleware/authenticateMiddleware');
const redirectMiddleware = require('./middleware/redirectMiddleware');

app.set('view engine', 'ejs')

app.use(express.static('public'))


app.listen(3000, function() {
    console.log("Listening on port::", 3000);
})

app.use(session({
    secret: 'p1234'
}))

app.use("*", (req, res, next) => {
    loggedIn = req.session.userId
    next()
})

global.loggedIn = null;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));



const dashboardController = require('./controllers/dashboard');
const registerUserController = require('./controllers/registerUser');
const addUserController = require('./controllers/addUser');
const loginController = require('./controllers/login');
const userLoginController = require('./controllers/userLogin');
const logoutController = require('./controllers/logout');
const g2Controller = require('./controllers/g2');
const g2RegisterController = require('./controllers/g2register');
const gController = require('./controllers/g');
const gUpdateController = require('./controllers/gupdate');


app.post('/register', g2RegisterController);


app.get('/g', authenticateMiddleware, gController);

app.post('/dataupdate', gUpdateController);

app.get('/dataupdate', gController);

app.get('/', dashboardController);

app.get('/g', authenticateMiddleware, function(req, res) {
    res.render('g');
})

app.get("/g2", authenticateMiddleware, g2Controller);
app.get("/signup", authenticateMiddleware, registerUserController);
app.post("/users/signup", addUserController);

app.get('/login', redirectMiddleware, loginController);
app.post('/users/login', redirectMiddleware, userLoginController);
app.get('/logout', authenticateMiddleware, logoutController);
app.use((req, res) => res.render('notFound'));