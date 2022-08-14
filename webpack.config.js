const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
	entry: {
		bundle: path.resolve(__dirname, "src/index.js"),
		shared: "react-confetti",
	},
	devtool: "inline-source-map", // not to be done in production mode
	devServer: {
		static: "./dist",
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(__dirname, "src", "index.html"),
		}),
		new webpack.ProvidePlugin({
			React: "react",
		}),
	],
	output: {
		filename: "main.js",
		path: path.resolve(__dirname, "dist"), // In current directory and inside dist folder.
		filename: "[name].[contenthash].js",
		clean: true,
	},
	mode: "development",
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/i,
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
