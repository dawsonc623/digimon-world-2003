const merge = require("webpack-merge");

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const commonConfig = require("./webpack.common");

commonConfig.module.rules[1].use.unshift(MiniCssExtractPlugin.loader);

commonConfig.plugins.push(
  new MiniCssExtractPlugin({
    "filename": "main.css"
  })
);

module.exports = merge(
  commonConfig,
  {
    "mode": "production"
  }
);
