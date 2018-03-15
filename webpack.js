const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const SriPlugin = require("webpack-subresource-integrity");

module.exports = {
	mode: "development",
	output: {
		path: require("path").resolve("out"),
		filename: "[name].js",
		chunkFilename: "[name].chunk.js",
		crossOriginLoading: "anonymous"
	},
	serve: {
		content: "static",
		clipboard: false,
		open: true,
		hot: false
	},

	entry: {
		index: ["./script.js"]
	},

	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: "css-loader",
						options: {
							namedExport: true,
							modules: true,
							camelCase: true,
							sourceMap: true,
							localIdentName: "[name]__[local]--[hash:2]",
							importLoaders: 1,
						}
					}
				]
			}
		]
	},

	plugins: [
		new MiniCssExtractPlugin({
			filename: "[name].css"
		}),
		new SriPlugin({
			enabled: true,
			hashFuncNames: ["sha256", "sha512"]
		})
	]
}