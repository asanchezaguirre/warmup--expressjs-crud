const express = require('express');
const morgan = require('morgan');
const app = express();

const PORT = process.env.PORT || 3000;

//LLamar archivo de API
const api = require('./src/routes/api')

console.log("**Express Version: ", require('express/package').version);


//middleware
app.use(morgan('combined'));
app.use('/api/v1', api) //llamammos a la const del archivo api


//testeando una ruta
app.get('/', (req, res) =>{
  res.send("Hello ")
})

//error 404
app.use((request, response) => {
  const ERROR = {
    message: '404. Not Found'
  }
  response
    .status(404)
    .json(ERROR);
});

//error 500
app.use((err, request, response, next) => {
  const ERROR = {
    message: '500. Server Error'
  }
  response
    .status(500)
    .json(ERROR);
});


app.listen(PORT, () => {
  const msg = `Node Server is running on PORT: ${PORT}`;

  console.log(msg);
});
