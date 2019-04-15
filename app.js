var app = require('./config/server');

var rotaNoticias = require('./app/routes/noticias');
rotaNoticias(app);

// ou passar direto assim:
// var rotaNoticias = require('./app/routes/noticias')(app);

var rotaHome = require('./app/routes/home');
rotaHome(app);

var rotaForm = require('./app/routes/formulario_inclusao_noticia');
rotaForm(app);

app.listen(3000, function(){
	console.log('server on');
});