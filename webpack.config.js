var Webpack = require('webpack');
var Path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var OpenBrowserWebpackPlugin = require('open-browser-webpack-plugin');

module.exports = {
	entry: __dirname + '/app/index.js',
	output: {
		path: Path.join(__dirname, '/build'),
		filename: 'bundle.js'
	},

	/*resolve extension自动扩展后缀名*/
	resolve: {
		extensions: ['.js', '.jsx']
	},

	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: '/node_modules',
				use: [
					'babel-loader'
				]
			},
			{
				test: /\.css$/,
				exclude: '/node_modules',
				use: [
					'style-loader', 
					'css-loader', 
					'postcss-loader'
				]
			},
			{
				test: /\.(png|woff|woff2|svg|ttf|eot)($|\?)/i,
				use: ['url-loader?limit=5000']
			}
		]
	},

	plugins: [
		/*针对给定路径的html文件， webpack通过这个插件
		对该html插件做js和css的代码的自动添加*/
		new HtmlWebpackPlugin({
			title: "react-o2o-demo",
			template: 'app/index.html'
		}),
		new Webpack.HotModuleReplacementPlugin(),
		new OpenBrowserWebpackPlugin({
			url: 'http://localhost:8080'
		}),
		new Webpack.DefinePlugin({
			__DEV__: JSON.stringify(JSON.parse(process.env.NODE_ENV == 'dev') || false)
		}),
		new Webpack.LoaderOptionsPlugin({
			options: {
				postcss: function (){
					return [precss, autoprefixer];
				}
			}
		})
	],
	devServer: {
		historyApiFallback: true,
		inline: true, //实时刷新
		hot: true
	}
}