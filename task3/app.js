var express = require('express');
var app = express();

var routes = require('./routes/route.js');

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

app.get('/', routes.home);

app.get('/login', routes.login);

app.get('/health', (req, res) => res.sendStatus(200));


var port = process.env.PORT || 3000;

var _server = app.listen(port, function() {
  console.log('Catch the action at http://localhost:' + port);
});

