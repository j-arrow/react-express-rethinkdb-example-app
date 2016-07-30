const config = require('../../config.js');

var http = require('http');
var express = require('express');

var webpack = require('webpack');
var webpackConfig = require('../../webpack.config');
var compiler = webpack(webpackConfig);

// Create the app, setup the webpack middleware
var app = express();

var webpackDevMiddleware = require('webpack-dev-middleware');
app.use(webpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
    stats: {
        colors: true,
    }
}));

var webpackHotMiddleware = require('webpack-hot-middleware');
app.use(webpackHotMiddleware(compiler));

const path = require('path');
var router = express.Router();
router.get('*', function(req, res) {
  res.sendFile(path.join(__dirname + '../../../client/main/main.html'));
});
app.use(router);

const server = new http.Server(app);
const io = require('socket.io')(server);

var r = require('rethinkdb');
var handleSocket = require('../socket/handler.js');
var todoSocketHandler = require('../modules/Todo/socketHandler.js');

r.connect({
    host: config.database.host,
    port: config.database.port,
    db: config.database.db
}).then(function(connection) {
    io.on('connection', function (socket) {

        handleSocket([
            todoSocketHandler
        ])(socket, r, connection);

    });
    server.listen(config.server.port,
        () => console.log('Server listening on port: ' + config.server.port)
    );
}).error(function(error) {
    console.log('Error connecting to RethinkDB!');
    console.log(error);
});
