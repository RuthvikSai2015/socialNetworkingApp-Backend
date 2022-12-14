const cors = require('cors');
const url = require('./src/model/data').userInterface;
const corsOptions ={
    origin:`${url}`, 
    credentials:true          
}

const auth = require('./src/auth');
const articles = require('./src/articles');
const following = require('./src/following');
const profile = require('./src/profile');
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const userSchema = require('./src/model/data').userSchema;
const articleSchema = require('./src/model/data').articleSchema;
const User = require('./src/model/data').Users;
const connectionString = "mongodb+srv://saranabiya:admin@cluster0.hdz40ci.mongodb.net/social?retryWrites=true&w=majority";

const hello = (req, res) => res.send({ hello: 'world' });


const app = express();
var hateoasLinker = require('express-hateoas-links');
const session = require("express-session");
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors(corsOptions));
app.get('/', hello);
//app.post('/users/:uname', addUser);
app.use(hateoasLinker);

auth(app);
articles(app);
profile(app);
following(app);

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
     const addr = server.address();
     console.log(`Server listening at http://${addr.address}:${addr.port}`)
});

