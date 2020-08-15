const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {


    mode: "development",


    entry: {
      fasupport: "./resources/fasupport.js",
      iconHover: "./iconHoverEffect/iconHoverEffect_assets/iconHover.js",
      iconHover: "./iconHoverEffect/iconHoverEffect_assets/iconHoverStyle.css"
    },


    output: {
      path: path.join(__dirname, "/dist"),
      filename: "js/[name]-min.js"
    },


    plugins: [
        new MiniCssExtractPlugin({
          filename: 'css/[name].css',
        }),
        new HtmlWebpackPlugin({
          template: "./iconHoverEffect/index.html",
          filename: "iconhover.html"
        })
    ],
      
    
    module: {
        rules: [
          {
            test: /\.css$/,
            use: [
              {
                loader: MiniCssExtractPlugin.loader,
                options: {
                  publicPath: './iconHoverEffect/iconHoverEffect_assets',
                },
              },
              'css-loader',
            ],
          },
        ],
    },

    devServer: {}
};