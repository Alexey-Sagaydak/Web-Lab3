const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: {
        main: path.resolve(__dirname, './src/scripts/all.js'),
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js',
    },

    plugins: [
           new HtmlWebpackPlugin({
               title: 'Webpack Boilerplate',
               template: path.resolve(__dirname, './src/html/index.html'),
               filename: 'index.html',
           }),
    ],

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.(?:ico|gif|png|jpg|jpeg|ico)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'Resources/[name][ext][query]'
                  }
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
                type: 'asset/inline',
            },
            {
                test: /\.(scss|css)$/,
                use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
            },
        ],
    },
    
    devServer: {
        historyApiFallback: {
            index: 'index.html'
        },
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        open: true,
        compress: true,
        hot: true,
        port: 8080,
    },

}