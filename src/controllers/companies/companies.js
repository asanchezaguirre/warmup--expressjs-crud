//Deinir funciones para htttp request

//jalar la data de las compañias
const companies = require('../../../data')

//crear una variable que trabaje com multiples funciones que seran los controladores
const controllers = {
	index: (req, res) => {
		console.log(req)
		res
			.status(200)
			.json({
				users: companies
			})
	},
	

}




//exportar
module.exports = controllers;