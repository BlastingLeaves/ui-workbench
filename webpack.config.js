const HtmlWebPackPlugin = require("html-webpack-plugin")

module.exports = {
    entry: './dev-server.js',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin(
            {
                inject: true,
                template: './.uiwb//public/index.html'
            }
        )
    ]
}