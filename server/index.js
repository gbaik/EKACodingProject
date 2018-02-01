const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');
const app = express();

const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/../dist')));

app.get('*', function (req, res) {
  res.sendFile(path.resolve(__dirname + '/../dist/index.html'));
});

app.post('/loginForm/createLogin', function (req, rest) {
  console.log('Contact info:', req.body);
});

app.post('/loginForm/createContact', function (req, rest) {
  console.log('Contact info:', req.body);
});

app.post('/loginForm/createAddress', function (req, rest) {
  console.log('Contact info:', req.body);
});

app.listen(port, _ => {
  console.log(`Server connected to port number: ${port}`);
}); 