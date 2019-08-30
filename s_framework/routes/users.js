var express = require('express');
var router = express.Router();

var users = [];

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('users', { users: users });
});

router.get('/registry', function(req, res, next) {
  res.render('user_reg');
});

router.post('/registry', function(req, res, next) {
	users.push(req.body.name);
	console.log(req.body.name);

	res.set('Content-Type', 'text/html');
	res.send('<h1>New User "'+req.body.name+'" Added!</h1>'+
			 '<br>Mira los usuarios: <a href="/users">/users</a>'+
			 '<br>Registra Nuevo Usuario: <a href="/users/registry">/users/registry</a>');
});

module.exports = router;
