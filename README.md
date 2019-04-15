# curso-nodejs
primeiro curso de nodejs

*aula18 =
precisa dar um module.exports = NomeDoExport; para que você consiga ver esse export aonde você tiver chamando este modulo.

modulo pode retornar um Objeto, Função, String, Boolean, depende do objetivo dele.

quando um modulo retorna uma função é necessario que nós executemos essa função, para isso é necessário colocar um () na frente do nome da variavel na qual você importou o modulo.

*aula19 =
criado uma pasta chamada config aonde ficarão as configurações do servidor que até então estava no app.js

*aula20 =
dentro do server.js foi setado o diretorio de views padrão, aonde ele irá pesquisar as views, atenção: o arquivo server.js é um modulo que está sendo chamado no app.js então a propriedade do app.set('views', 'estaPropriedade'); vai começar a pesquisar a partir do local que o modulo server.js está sendo utilizado

na hora de chamar um modulo que tem uma função que usa uma variavel que não foi declarada na função, precisa ser passado como parametro na hora de chamar o modulo, e obviamente dentro do modulo a função precisa receber esse parametro