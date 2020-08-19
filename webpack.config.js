const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports ={
    entry: './src/app.js', /* dirección de origen */
    output: {
        path: __dirname+'/build',/* debe ser ruta absoluta, ruta donde irán la carpeta con los archivos convertidos */
        filename: 'bundle.js'/* cuál será el nombre del archivo convertido */
    },
    devServer: {
        port: 3000
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    {loader: MiniCssExtractPlugin.loader},
                    {loader: 'css-loader'},
                    {loader: 'sass-loader'}
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html' /* código de origen de html, ruta relativa */ 
        }),
        new MiniCssExtractPlugin({
            filename: 'blunde.css'
        })
    ]
}