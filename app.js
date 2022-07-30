//jshint esversion:6

const express = require('express')
const app = express()
app.use(express.static('public'));
const port = 3000

app.get('/', (req, res) => {
  res.sendFile("index.html", {root:__dirname})
});





app.listen(process.env.PORT || 3000, () => {
  console.log(`Example app listening on `+port)
});