const path = require('path');
const webpack = require('webpack');


module.exports = {
	loaders: [
		{
			test: /\.jsx?$/,
			exclude: /(node_modules)/,
			loader: 'babel', 
			query: {
				presets: ['es2015']
			}
		}
	]
}

