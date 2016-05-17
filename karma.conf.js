var webpack = require('webpack');

module.exports = function (config) {
	config.set({

		browsers: ['PhantomJS'],

		singleRun: !!process.env.CI,

		frameworks: [ 'mocha' ],

		files: [
			'./node_modules/phantomjs-polyfill/bind-polyfill.js',
			'karma.test.js'
		],

		preprocessors: {
			'karma.test.js': [ 'webpack', 'sourcemap' ]
		},

		reporters: [ 'mocha' ],

		plugins: [
			require("karma-webpack"),
			require("karma-mocha"),
			require("karma-mocha-reporter"),
			require("karma-phantomjs-launcher"),
			require("karma-sourcemap-loader")
		],

		webpack: {
			devtool: 'inline-source-map',
			module: {
				loaders: [
					{ test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
					{ test: /\.json$/, loader: 'json-loader' } //,
				]
			},
			resolve: {
				modulesDirectories: [
					'src',
					'node_modules'
				],
				extensions: ['', '.json', '.js', '.jsx']
			},
			plugins: [
				new webpack.IgnorePlugin(/\.json$/),
				new webpack.NoErrorsPlugin(),
				new webpack.EnvironmentPlugin([
		      'NODE_ENV',
		      'API_HOST'
		    ])
			]
		},

		webpackServer: {
			noInfo: true
		}

	});
};
