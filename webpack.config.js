const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

let NODE_ENV = process.env.NODE_ENV;

let plugins = [
		new HtmlWebpackPlugin()		
	];
	
if (NODE_ENV ==='production') {
	plugins.push(new ExtractTextPlugin({filename: "styles.css"}))
}

module.exports = {
	context: path.join(__dirname, 'src'),
	entry: './index.js',
	
	devtool: NODE_ENV ==='production' ? 'none' : 'source-map',
	
	output: {
		filename: 'bundle.js',
		path: path.join(__dirname, 'dist'),
	},
	
	resolve: {
		extensions: ['.js']
	},
	
	module: {
		rules: [
		  {
			test: /\.js$/,
			exclude: /node_modules/,
			use: {
			  loader: 'babel-loader'
			},
		  },
		  {
			test: /\.css$/,
			exclude: /node_modules/,
			use: ExtractTextPlugin.extract({ fallback:  "style-loader", use: "css-loader"})
		  }
		]
	},
	
	plugins: plugins,

	watch: false
	
};