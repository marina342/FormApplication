/**
 * Created by pidoi on 3/27/2018.
 */
var path = require("path");
module.exports = {
    entry: './src/index.js',
    output: {
        filename: "build.js"
    },
    watch: true,
    watchOptions: {
        aggregateTimeout:300
    },
    devServer: {
        contentBase: path.join(__dirname, "src/"),
    },
    module: {
        loaders:[{
            test: /\.js$/,
            loader: 'babel-loader',
            query: {
                presets: [
                    "react"
                ],
            }
        },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            }]
    }
};
