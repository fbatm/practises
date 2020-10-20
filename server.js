const webpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');

const config = require('./test.webpack.config.js');
const options = config.devServer;
// delete config.devServer;

webpackDevServer.addDevServerEntrypoints(config, options);
const compiler = webpack(config);
const server = new webpackDevServer(compiler, options);

server.listen(8000, '0.0.0.0', ()=>{
	console.log('dev server started on 80000')
})