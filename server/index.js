const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');
const app = express();

const models = require('../db/models');

const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/../dist')));

app.get('*', function (req, res) {
  res.sendFile(path.resolve(__dirname + '/../dist/index.html'));
});

app.post('/loginForm/createLogin', function (req, rest) {
  console.log('Hit!');

  loginInfo.forge()
    .save({ 
      test: req.body
    })
    .then(() => {
      console.log('Hit2');
      LoginInfo.where({ test: req.body })
        .fetchAll()
        .then(test => {
          console.log(test);
          res.status(201).send(test);
        });
    })
  // User.fetchAll().then(function(user) {
  //   console.log('Hit2')    
  //   console.log(user);
  // }).catch(function(err) {
  //   console.error(err);
  // });

  models.loginInfo.fetchAll().then(test => {
    console.log('tes',test)
  })
  .catch(err => {
    console.log(err);
    // if (err.constraint === 'groups_name_unique') {
    //   return res.status(403);
    // }
    // res.status(404).send(err);
  });
});

app.post('/loginForm/createProfile', function (req, rest) {
  console.log('Contact info:', req.body);
});

app.listen(port, _ => {
  console.log(`Server connected to port number: ${port}`);
}); 