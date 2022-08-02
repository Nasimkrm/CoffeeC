//jshint esversion:6

const express = require('express'); 
const app = express();
app.use(express.static('public'));



app.get('/', (req, res) => {
  res.sendFile(index.html)
});




const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Example app listening on `+port)
});