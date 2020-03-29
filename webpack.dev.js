const merge = require("webpack-merge");

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const commonConfig = require("./webpack.common");

// commonConfig.module.rules[1].use.unshift(MiniCssExtractPlugin.loader);

// commonConfig.plugins.push(
//   new MiniCssExtractPlugin({
//     "filename": "main.css"
//   })
// );
commonConfig.module.rules[1].use.unshift("style-loader");

module.exports = merge(
  commonConfig,
  {
    "devtool": "eval-source-map",
    "mode": "development",

    "devServer": {
      "disableHostCheck": true,
      "historyApiFallback": true,
      "host": "0.0.0.0",
      "port": 8080
    }
  }
);
