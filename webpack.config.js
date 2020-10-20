var path = require('path');
var webpack = require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = function(env) {
	return {
		mode: 'production',
		optimization: {
			splitChunks: {
				chunks: 'all'
			}
		},
		entry: {
			index: path.join(__dirname, 'application/index.jsx')
		},
		output: {
			filename: '[name].[hash:5].js',
			path: path.join(__dirname, 'application/build')
		},
		module: {
			rules: [{
				test: /\.css$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader'
				]
			}, {
				test: /\.(js|jsx)$/,
				loader: 'babel-loader'
			// }, {
			// 	test: /\.(js|jsx)$/,
			// 	loader: 'eslint-loader',
			// 	enforce: 'pre'
			}]
		},
		resolve: {
			modules: [path.join(__dirname, "/application"), 'node_modules'],
			extensions: ['.js', '.jsx']
		},
		plugins: [
			new CleanWebpackPlugin({
				cleanStaleWebpackAssets: false
			}),
			new MiniCssExtractPlugin({
				filename: '[name].[hash].css'
			}),
			new HtmlWebpackPlugin({
				title: "test",
				template: path.join(__dirname, 'application/index.html')
			})
		]
	}
}