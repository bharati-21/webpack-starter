const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.config.common");

module.exports = merge(commonConfig, {
	devtool: "inline-source-map", // not to be done in production mode
	devServer: {
		static: "./dist",
	},
	mode: "development",
});
