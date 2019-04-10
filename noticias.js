var http = require('http');

var server = http.createServer(function (req, res) {

	var categoria = req.url;
	if (categoria == '/comida') {
		res.end("<html><body> noticia de comida </body></html>");
	} else if (categoria == '/jogos') {
		res.end("<html><body> noticia de jogos </body></html>");
	} else {
		res.end("<html><body> Portal de noticias </body></html>");
	}
});

server.listen(3000);