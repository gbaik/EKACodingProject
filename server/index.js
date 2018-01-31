const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.get('/', function (req, res) {
  res.end();
});

app.listen(port, _ => {
  console.log(`Server connected to port number: ${port}`);
}); 