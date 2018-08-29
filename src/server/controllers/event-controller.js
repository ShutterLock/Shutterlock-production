const db = require('../elephantsql');
const bcrypt = require('bcryptjs');

// middleware for postgresql.  

const controller = {

  createUser (req, res, next) {
    const username = req.body.username.toLowerCase();
    const password = req.body.password.toLowerCase();
    console.log('inside of createUser', username)

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
    // console.log('inside of verify user', req.body);
    // do "'" because of postgres
    // const username = "'" + req.body.username.toLowerCase() + "'";
    // const password = "'" + req.body.password.toLowerCase() + "'";
    
    // const text = `SELECT * FROM ACCOUNT WHERE USERNAME = ${username} and password = ${password};`;
    const text = `SELECT * FROM ACCOUNT`;
    db.query(text)
      .then(table => {
        console.log('inside of query ', table)
        console.log(res.locals);
        res.locals.table = table;
        next()
      })

    // db.query(text)
    //   .then(user => {
    //     // if query is successful allow user to naviage to next step, otherwise alert them of invalid login credentials. 
    //     if (user[0]) {
    //       console.log(user[0])
    //       return true;
    //     } else {
    //       return false; 
    //     }
    //   })
    //   .catch(error => console.log('error ', error));
  }
}

module.exports = controller;
