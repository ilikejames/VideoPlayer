const webpack = require('webpack');
const path = require('path');

module.exports = {

	entry: "./src/index",

	resolve: {
		root: [path.resolve(__dirname, 'src'), path.resolve(__dirname, 'node_modules')],
		extensions: ['', '.js', '.jsx'],
	},

	devtool: 'source-map',

	output: {
		path: path.join(__dirname, 'dist'),
		filename: `bundle-${process.env.NODE_ENV || 'unk'}.js`
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

	plugins: [
	    new webpack.EnvironmentPlugin([
	      'NODE_ENV',
	      'API_HOST'
	    ])
	]

};


