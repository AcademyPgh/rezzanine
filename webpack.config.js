const path = require('path');

module.exports = {
  entry: './output/index.js',
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    path: path.resolve(__dirname, 'public/js'),
  },
  devServer: {
    static: './public',
  },
  module: {
    rules: [{
      test: /\.m?js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: "babel-loader",
        options: {
          presets: [["@babel/preset-react",
            {
              "pragma": "React.createElement",
              "pragmaFrag": "DomFrag",
              "throwIfNamespace": false,
              "runtime": "classic"
            }
          ]]
        }
      }
    }]
  }
  // optimization: {
  //   runtimeChunk: 'single',
  // },
};