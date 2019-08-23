const express = require('express');
const bcrypt = require('bcrypt');
const cors = require('cors');

const users = require('./data/usersQueries');

const server = express();
server.use(express.json());
server.use(cors());

server.use('/restricted', async (req, res, next) => {
  try {
    const { cookie } = req.headers;

    if (await users.getUserById(cookie)) {
      next();
    } else {
      res.status(403).json({ message: 'You shall not pass!' });
    }
  } catch(err) {
    res.status(500).json(err);
  }
});

server.post('/api/register', async (req, res) => {
  try {
    const { username, password } = req.body;

    const hash = bcrypt.hashSync(password, 8);
    const newUser = await users.addUser({ username, password: hash });

    res.status(201).json(newUser);
  } catch(err) {
    res.status(500).json(err);
  }
});

server.post('/api/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    console.log(username, password);
    const user = await users.getUserByName(username);

    if (user && bcrypt.compareSync(password, user.password)) {
      res.status(200).json({ cookie: user.id });
    } else {
      res.status(403).json({ message: 'You shall not pass!' });
    }
  } catch(err) {
    res.status(500).json(err);
  }
});

server.get('/api/users', async (req, res) => {
  try {
    const { authorization } = req.headers;
    
    if (await users.getUserById(authorization)) {
      res.status(200).json(await users.getUsers());
    } else {
      res.status(403).json({ message: 'You shall not pass!' });
    }
  } catch(err) {
    res.status(500).json(err);
  }
});

server.listen(5000, () => {
  console.log('server on :5000');
});