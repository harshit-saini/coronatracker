const path = require("path");
const miniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "production",
  watch: true,
  entry: {
    bootstrap: "./src/js/bootstrap.js",
    fontawesome: "./src/js/fontawesome.js",
    chartjs: "./src/js/chart.js",
  },
  output: {
    path: path.resolve(__dirname, "./public"),
    filename: "./js/[name]-bundle.js",
  },
  module: {
    rules: [
      {
        // this is for the images
        test: /\.(jpg|gif|png)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              path: path.resolve(__dirname, "./public"),
              name: "/images/[name].[ext]",
            },
          },
        ],
      },
      {
        // this is for all scss files
        test: /\.scss$/,
        use: [miniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(eot|woff|woff2|ttf|svg)(\?\S*)?$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "/fonts/[name].[ext]",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new miniCssExtractPlugin({
      filename: "./css/[name]-bundle.css",
    }),
  ],
};
