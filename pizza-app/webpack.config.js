const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/index.tsx',
	devtool: "eval-source-map",
	resolve: {
		extensions: ['.ts', 'tsx', '.js'],
	},
	module: {
		rules: [{
			test: /\.tsx?$/,
			loader: 'babel-loader',
			exclude: /node_modules/,
		}]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
			filename: 'index.html',
		}),
	],
};
