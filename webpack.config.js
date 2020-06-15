const path = require('path');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');

const conf = {
	output: {
		filename: 'js/[name].js',
		path: path.resolve(__dirname, './dist')
	},
	module: {
		rules: [
			// {
			// 	test: /\.tsx?/,
			// 	use: 'ts-loader',
			// 	exclude: '/node_modules/'
			// },
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
			// pages: path.resolve(__dirname, 'src/pages/'),
			// scss: path.resolve(__dirname, 'src/scss/'),
			// js: path.resolve(__dirname, 'src/js/'),
			// css: path.resolve(__dirname, 'src/css/'),
			// assets: path.resolve(__dirname, 'src/assets/'),
			modules: path.resolve(__dirname, 'node_modules')
		},
		extensions: ['.js', '.jsx', '.ts', '.tsx']
	},
	devtool: 'none',
	optimization: {
		minimizer: [
			new TerserPlugin({
				cache: true
			})
		]
	}
};


module.exports = conf;
