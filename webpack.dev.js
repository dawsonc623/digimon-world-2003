const merge = require("webpack-merge");

const commonConfig = require("./webpack.common");

module.exports = merge(
  commonConfig,
  {
    "devtool" : "eval-source-map",
    "mode"    : "development",

    "devServer" : {
      "disableHostCheck"    : true,
      "historyApiFallback"  : true,
      "host"                : "0.0.0.0",
      "port"                : 8080
    }
  }
);
