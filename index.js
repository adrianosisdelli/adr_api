var express = require('express');
var mysql = require('mysql');

var app = express();

var conn = mysql.createConnection({
	host: "adrsisdelli.ddns.net",
	user: "adriano",
	password: "adr574599869945",
	database: "api"
});

app.get('/:username', function(req, res){

	let obj_response = {
		token: req.get('token'),
		developer: 'Adriano S. Cosa <adrianosisdelli@gmail.com>',
		username_passed: req.params.username,
		message: 'Welcome to my first API!',
		value: 0.49,
		is_valid_name: valida_nome(req.params.username),
		calc: (1118.75 * 1.16),
		values: [12, 13, 41, 69, {user: 'adriano.costa', email: 'adrianosisdelli@gmail.com'},
			{
				key_pair: 'adrssd126497',
				value: '3kdcccdb33233846cb6658'
			}
		]
	};

	res.json(obj_response);
});

function valida_nome(nome) {

	if (nome.length >= 10) {

		return true;
	}

	return false;
}


app.listen(3000, function(){
	console.log('Servidor iniciado.');
});
