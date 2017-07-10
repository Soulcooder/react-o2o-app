var Webpack = require('webpack');
var Path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		app: __dirname + '/app/index.js',
		/*将第三方依赖单独打包*/
		vendor: Object.keys(pkg.dependencies)
	},
	output: {
		path: Path.join(__dirname, '/build'),
		filename: 'bundle.js'
	},

	/*resolve extension自动扩展后缀名*/
	resolve: {
		extensions: ['', '.js', '.jsx']
	},

	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: '/node_modules',
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.css$/,
				exclude: 'node_modules',
				use: [
					{
						loader: 'style-loader'
					},
					{
						loader: 'css-loader'
					},
					{
						loader: 'postcss-loader'
					}
				]
			},
			{
				test: ''
			}
		]
	},

	plugins: [
		/*针对给定路径的html文件， webpack通过这个插件
		对该html插件做js和css的代码的自动添加*/
		new HtmlWebpackPlugin({
			title: "react-o2o-demo"
		}),
		new Webpack.HotModuleReplacementPlugin(),
		/*DefinePlugin用于定义全局变量*/
		new Webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify("production")
			}
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
		inline: true,
		hot: true
	}
}