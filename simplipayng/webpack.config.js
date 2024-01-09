var path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.tsx',
  output: {
    path: path.resolve('build'),
    filename: 'index.tsx',
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      { test: /\.tsx?$/, exclude: /node_modules/, use: 'ts-loader' },
      { test: /\.js$/, exclude: /node_modules/, use: 'babel-loader' },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  externals: {
    react: 'react',
  },
};
