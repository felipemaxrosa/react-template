const webpack = require("webpack");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.name': JSON.stringify('FelipeRosaProd'),
    }),
    new BundleAnalyzerPlugin({ openAnalyzer: false, analyzerMode: 'static' }),
  ],
  // how to write the compiled files to disk
  // https://webpack.js.org/concepts/output/
  output: {
    filename: '[name].[hash:20].js',
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin(), new OptimizeCssAssetsPlugin({})],
  },
};
