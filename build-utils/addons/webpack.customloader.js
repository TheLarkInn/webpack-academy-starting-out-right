const config = {
    resolveLoader: {
        alias: {
            "our-first-loader": require.resolve("../../loader.js")
        }
    },
    module: {
        rules: [
            {
                test: /\.js/,
                use: [
                    {loader: "our-first-loader"}
                ]
            }
        ]
    }
};

module.exports = config;