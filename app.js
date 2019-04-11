var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send('<html><body> Portal de noticia </html></body>');
});

app.get('/games', function(req, res){
    res.send('<html><body> noticia sobre games </html></body>');
});

app.listen(3000, function(){
    console.log('servidor rodando com Expres');
});