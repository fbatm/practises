const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const webpack = require('webpack');

const outputDir = path.resolve(__dirname, 'dist');

module.exports = {
	mode: 'development',
	entry: {
		app: './test.webpack.entry.js',
		// app: path.resolve(__dirname, 'application/index.jsx')
	},
	output: {
		filename: '[name].js',
		chunkFilename: '[name].js',
		path: outputDir,
		// publicPath: '/chunks/'
	},
	devtool: 'inline-source-map',
	devServer: {
		contentBase: outputDir,
		// publicPath: '/notExitDir/'
		// publicPath: '/devDist/',
		hot: true
	},
	optimization: {
		usedExports: true,
		moduleIds: 'hashed',
		runtimeChunk: 'single',
		splitChunks: {
			cacheGroups: {
				vendor: {
					test: /[\\/]node_modules[\\/]/,
					name: 'vendors',
					chunks: 'all'
				}
			}
		}
	},
	module: {
		rules: [{
			test: /\.(js|jsx)$/,
			use: [
				'babel-loader'
			]
		},{
			test: /\.css$/,
			use: [
				MiniCssExtractPlugin.loader,
				// 'style-loader',
				'css-loader'
			]
		}, {
			test: /\.(png|jpg|jepg|svg|gif)$/,
			use: {
				loader: 'url-loader',
				options: {
					limit: true
				}
			}
		}]
	},
	resolve:{
		extensions: ['.js', '.jsx']
	}, 
	plugins: [
		new CleanWebpackPlugin({
			cleanStaleWebpackAssets: false
		}),
		new MiniCssExtractPlugin({
			filename: '[name].css'
		}),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('test')
		}),
		new HtmlWebpackPlugin({
			title: 'test',
			favicon: './seals/tjcfp.png',
			templateParameters: {key: 'value'},
			template: './test.webpack.html'
		}),
	]
}