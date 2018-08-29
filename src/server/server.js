const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config();
const path = require('path');
const cors = require('cors');

// using postgresSQL instead of mongoose
const tokenService = require('./services/TokenService');
const authService = require('./services/AuthService');
const Controller = require('./controllers/event-controller');

// Configure Express Application Server
const app = express();
const PORT = process.env.PORT || 8080;

// Set up body-parser for processing form data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Enable CORS to allow different hosts to connect to our server
app.use(cors());

// Middleware to parse tokens out of incoming request headers
app.use(tokenService.receiveToken);

// Dummy Restricted Route - Unsure of how this one works still.
app.get('/restricted', authService.restrict(), (req, res) => {
  res.json({ tokenData: res.locals.tokenData });
});

// Signup Route - ENTIRELY CHANGED. 
app.post('/signup', 
  Controller.createUser,
  tokenService.createToken, 
  (req, res) => {
    res.json({ token: res.locals.token });
  }
);

//Login Route
app.get('/login', 
  Controller.verifyUser,
  // commented out for now to create routes. 
//   tokenService.createToken, (req, res) => {
//   res.json({ token: res.locals.token, palettes: res.locals.palettes });
// }

);

// Start server
app.listen(PORT, () => console.log('Server started on port', PORT));


/* below is the legacy code - regarding palette, aiming to delete.  - Jon
  * //Generate Palette Route
  * app.post('/generatePalette', Users.generatePalette, (req, res) => {
  *   
  * });
  * 
  * //Save Palette Route
  * app.post('/savePalette', authService.restrict(), Users.savePalette, tokenService.createToken, (req, res) => {
  *   res.json( { token: res.locals.token, palettes: res.locals.palettes });
  * });
  * 
  * //Delete Palette Route
  * app.delete('/deletePalette/:palette_id', authService.restrict(), Users.deletePalette, tokenService.createToken, (req, res) => {
  *   res.json({token: res.locals.token, palettes: res.locals.palettes})
  * });
*/