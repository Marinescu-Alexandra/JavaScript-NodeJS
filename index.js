const express = require('express');
const handleGreeting = require('./hola');
const handleSnailFacts = require('./snailFacts');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const { getAllUsers, getUserById, createUser, updateUser, deleteUser } = require('./controllers/users');

const app = express();
const port = 3001;

const MY_SECRET_KEY = "superdupersecret";

app.use(bodyParser.json());

const findUser = (username, password) => {
    if(username === 'admin' && password === '123456789') {
        return {
            username,
        }
    } else {
        return null;
    }
}

const authorizationMiddleware = (req, res, next) =>{
    const authorization = req.headers.authorization;
    if(authorization) {
        try {
            const decoded = jwt.verify(authorization.replace('Bearer', ''), MY_SECRET_KEY)
            next();
        } catch (e) {
            res.send ({
                error: "Invalid token"
            });
        }
        }else {
            res.send ( {
                error: "invalid token"
            });
    }
};

app.get('/', (req, res) => {
    res.send('Hola mi amigo!')
});

app.post("/login", (req, res) => {
    const body = req.body;
    const username = body.username;
    const password = body.password;

    if(findUser(username, password)) {
        const token =  jwt.sign({}, MY_SECRET_KEY );
        res.send({
            token,
        });
    }else {
        res.status(401).send({
            token: null,
        });
    }
});

app.get('/hello/:nume?', authorizationMiddleware, (req, res) => {
    handleGreeting(req, res)
});

app.get('/snail/facts', handleSnailFacts);

app.get("/users", getAllUsers );
app.get("/users/:id", getUserById );
app.post("/users", createUser);
app.put("/users/:id", updateUser);
app.delete("/users/:id", deleteUser);

app.listen(port, () => {
    console.log('Server started on', port);
});