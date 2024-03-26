const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('@module-federation/enhanced').ModuleFederationPlugin;
const path = require('path');

module.exports = {
  entry: './src/index',
  mode: 'development',
  target: 'web',
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    port: 3001,
  },
  output: {
    publicPath: 'auto',
  },
  resolve: {  
    extensions: ['.ts', '.tsx', '.js'],  
  },  
  module: {  
    rules: [  
      {  
        test: /\.tsx?$/,  
        use: 'ts-loader',  
        exclude: /node_modules/,  
      },  
    ],  
  },  
  plugins: [
    new ModuleFederationPlugin({
      name: 'app1',
      remotes: {
        app2: `MetaMaskStarknetSnapWallet@https://s3.eu-central-1.amazonaws.com/dev.snaps.consensys.io/get-starknet/remoteEntry.js`
      },
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};