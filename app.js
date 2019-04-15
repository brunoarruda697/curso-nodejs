var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/games', function(req, res){
    res.render('secao/games.ejs');
});

app.get('/', function(req, res){
    res.send('<html><body>Portal de noticias</html></body>');
});

app.listen(3000, function(){
    console.log('servidor rodando com Expres');
});