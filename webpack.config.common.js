const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
	entry: {
		bundle: path.resolve(__dirname, "src/index.js"),
		shared: "react-confetti",
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(__dirname, "src", "index.html"),
		}),
		new webpack.ProvidePlugin({
			React: "react",
		}),
		new CleanWebpackPlugin(),
	],
	output: {
		filename: "main.js",
		path: path.resolve(__dirname, "dist"), // In current directory and inside dist folder.
		filename: "[name].[contenthash].js",
		clean: true,
	},
	module: {
		rules: [
			{
				test: /\.js$|jsx/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: "babel-loader",
				},
			},
			{
				test: /\.css$/i,
				use: ["style-loader", "css-loader"],
			},
			{
				test: /\.(png|svg|gif|jpeg|jpg)$/i,
				type: "asset/resource",
			},
			{
				test: /\.(woff|woff2|eot|tff|otf)$/i,
				type: "asset/resource",
			},
			{
				test: /\.(csv|tsv)$/i,
				use: ["csv-loader"],
			},
			{
				test: /\.xml$/i,
				use: ["xml-loader"],
			},
		],
	},
	optimization: {
		runtimeChunk: "single",
		splitChunks: {
			cacheGroups: {
				vendor: {
					test: /[\\/]node_modules[\\/]/,
					name: "vendors",
					chunks: "all",
				},
			},
		},
	},
};
