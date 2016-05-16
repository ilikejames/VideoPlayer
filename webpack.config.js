const webpack = require('webpack');
const path = require('path');

module.exports = {

	entry: "./src/index",

	resolve: {
		extensions: ['', '.js', '.jsx']
	},

	devtool: 'source-map',

	output: {
		path: path.join(__dirname, 'dist'),
		filename: "bundle.js"
	},

	module: {

		preLoaders: [
			{
				test: /\.js?/, loader: "eslint-loader", exclude: /node_modules/
			}
		],

		loaders: [
			{
				test: /\.jsx?/,
				loaders: ['babel'],
				include: path.join(__dirname, 'src')
			}
		]
	}

};


