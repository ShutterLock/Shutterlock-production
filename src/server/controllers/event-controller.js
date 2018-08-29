const db = require('../elephantsql');
const bcrypt = require('bcryptjs');

// middleware for postgresql.  

const controller = {

  createUser (req, res, next) {
    const username = req.body.username.toLowerCase();
    const password = req.body.password.toLowerCase();

    const text = 'INSERT INTO account(username, password) VALUES($1, $2) RETURNING *';
    const values = [username, password];

    db.query(text, values)
      .then(res => console.log(res.rows))
      .catch(err => console.error(err.stack));

    // this is the part to care about. 
    res.locals.TokenData = {
      username: username,
    };

    next();
  },

  verifyUser(req, res, next) {

    const text = `SELECT * FROM ACCOUNT`
    db.query(text)
      .then(user => {
        if (user[0]) {
          res.locals.user = user;
          next();
        } else {
          res.status(404).json({ error: 'Unable to verify user' });
        }
      })
      .catch(error => console.log('error ', error));
  }
}

module.exports = controller;
