const express = require('express');
const app = express();
app.use(express.static('assets'));

app.get('/', function(req, res) {
	res.sendFile('./index.html');
});

app.get('/userForm', function(req, res) {
	const response = {
		first_name: req.query.first_name,
		last_name: req.query.last_name
	};
	res.send(JSON.stringify(response));
})

const server = app.listen(3000, 'localhost', function() {
	const host = server.address().address;
	const port = server.address().port;

	console.log('Przykłsdowa aplikacja nasłuchuje na http://' + host + ':' + port);
});
