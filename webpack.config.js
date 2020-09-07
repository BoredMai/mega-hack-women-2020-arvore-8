const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack');
const TerserPlugin = require('terser-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: path.join(__dirname, 'src', 'index.html'),
  filename: 'index.html',
  inject: 'body',
});

const ImageminPluginConfig = new ImageminPlugin({
  bail: false,
  cache: true,
  imageminOptions: {
    plugins: [['optipng', { optimizationLevel: 5 }]],
  },
  test: /\.(png)$/i,
});

module.exports = (_, argv) => {
  const isProduction = argv.mode === 'production';

  return {
    mode: argv.mode || 'development',
    devtool: 'inline-source-map',
    entry: path.join(__dirname, 'src', 'index.tsx'),
    output: {
      path: path.join(__dirname, 'public'),
      publicPath: isProduction ? '/mega-hack-women-2020-arvore-8/' : '/',
      filename: 'index.bundle.js',
    },
    resolve: {
      alias: {
        components: path.resolve(__dirname, 'src/components/'),
        pages: path.resolve(__dirname, 'src/pages/'),
        styles: path.resolve(__dirname, 'src/styles/'),
      },
      extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
    },
    module: {
      rules: [
        // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
        { test: /\.tsx?$/, loader: 'ts-loader' },
        {
          test: /\.css$/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                modules: {
                  exportLocalsConvention: 'camelCase',
                  localIdentName: '[local]__[hash:base64:5]',
                },
              },
            },
          ],
        },
        {
          test: /\.(png|jp(e*)g|svg)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                limit: 8000,
                name: 'images/[name]__[hash].[ext]',
              },
            },
          ],
        },
      ],
    },
    devServer: {
      historyApiFallback: true,
    },
    plugins: isProduction
      ? [
          new CleanWebpackPlugin(),
          HtmlWebpackPluginConfig,
          ImageminPluginConfig,
        ]
      : [new CleanWebpackPlugin(), HtmlWebpackPluginConfig],
    optimization: {
      minimize: isProduction,
      minimizer: [new TerserPlugin()],
    },
  };
};
