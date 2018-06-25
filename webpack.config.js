const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
	entry: './src/app.jsx',
	output: {
		filename: 'bundle.js',
		path: path.resolve('dist')
	},
	resolve: {
        alias : {
            page        : path.resolve(__dirname, 'src/page'),
            component   : path.resolve(__dirname, 'src/component'),
            util        : path.resolve(__dirname, 'src/util'),
            service     : path.resolve(__dirname, 'src/service')
        }
    },
	module: {
		rules: [
			{
                test:/\.(js|jsx)?$/,
                exclude:/(node_modules)/,
                include: /src/,
                use:{ 
                	loader: 'babel-loader',
                	options: {
                		presets: ['react'],
                	}

            	}
            },
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
				// use: [
				// 	'style-loader',
				// 	{
				// 		loader: 'css-loader',
				// 		options: {
				// 			importLoaders: 1,
				// 			modules: true,
				// 			localIdentName: '[local]-[hash:base64:5]'
				// 		}
				// 	}
				// ]
			},
			{
				test: /\.(jpe?g|png|gif)$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 8192,
							outputPath: 'images'
						}
					}
				]
			},
			{
				test: /\.(html|htm)$/,
				use: 'html-withimg-loader'
			}
		]
	},
	devServer: {
		contentBase: './dist',
		historyApiFallback: {
            index: '/dist/index.html'
		},
        port: 3000,             
        open: true,             // 自动打开浏览器
    },
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html'
		}),
		new CleanWebpackPlugin('dist')
	]
}