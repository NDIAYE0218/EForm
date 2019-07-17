var express = require('express');
var bp = require('body-parser');
var app = express();
var port = process.env.PORT || 4000;
var mongoose = require('mongoose');
configDB = require('./config/connexionMongo');
mongoose.connect(configDB.url, { useNewUrlParser: true });
mongoose.connection.once('open', () => {
  console.log('Connexion a la BD EFORMCLICHY');
});
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
app.use(bp.json())
require('./app/routes')(app);
app.listen(port);
console.log('Le service Backend a démaré sur le port: ' + port);