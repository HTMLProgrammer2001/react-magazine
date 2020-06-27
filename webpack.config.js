const path = require('path');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');

const conf = {
	output: {
		filename: 'bundle.js'
	},
	mode: 'development',
	module: {
		rules: [
			{
				test: /\.(js|ts)x?$/,
				use: 'cache-loader',
				exclude: '/node_modules/'
			},
			{
				test: /\.(ts|js)x?$/,
				loader: 'babel-loader',
				exclude: '/node_modules/',
				query: {
					presets: ['react', 'es2015']
				}
			}
		]
	},
	plugins: [
		new webpack.ProvidePlugin({
			$: 'jquery',
			React: 'react',
			ReactDOM: 'react-dom'
		})
	],

	resolve: {
		alias: {
			modules: path.resolve(__dirname, 'node_modules')
		},
		extensions: ['.js', '.jsx', '.ts', '.tsx']
	},
	optimization: {
		minimizer: [
			new TerserPlugin({
				cache: true
			})
		]
	}
};


module.exports = conf;
