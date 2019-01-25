
//configurar rutas

const { Router } = require('express')

const app = Router()


//Jalar controladores
const Companies = require('../controllers/companies/companies')

//crear primera ruta de petición
app.get('/users', Companies.index)//llamamos de Companies a la funcion index









module.exports = app;