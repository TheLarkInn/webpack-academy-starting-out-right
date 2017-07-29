const config = {
    devtool: "eval-source-map", // webpack.js.org/configuration/devtool
    module: {
        rules: [
            {
                test: /\.css/,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            }
        ]
    }
};

module.exports = config;