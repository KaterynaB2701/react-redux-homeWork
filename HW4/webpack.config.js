const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
	devtool: (isDevelopment) ? 'source-map' : false,
	entry: path.join(__dirname + '/src/index.js'),
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: '[name].js'
	},
	watch: (isDevelopment),
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: [/node_modules/, /build/]
			},
			{
				test: /\.css$/,
				use:  ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: 'css-loader'
				})
			}
		]
	},
	plugins: [
		new ExtractTextPlugin('bundle.css'),
		new HtmlWebpackPlugin({
			template: "./src/index.html",
			inject: "body"
		})
	]
};