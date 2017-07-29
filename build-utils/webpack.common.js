const commonPaths = require("./common-paths");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const config = {
    entry: commonPaths.appEntry,
    output: {
        filename: "bundle.js",
        path: commonPaths.outputPath
    },
    module: {
        rules: [
            {
                test: /\.png/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 12000
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin()
    ]
};

module.exports = config;