const express = require('express');
const bodyParser = require('body-parser');
const { login, register, users } = require("./users");
const { posts, addPost } = require("./posts");
const app = express();
const port = 1234;

app.use(bodyParser.json());

app.get('/', (request, response) => {
    response.json({ users, posts });
});

app.post('/register', register);
app.post('/login', login);
app.post('/posts', addPost);

app.listen(port, () => console.log(`bezim na ${port}`));
