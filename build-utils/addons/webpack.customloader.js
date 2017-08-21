// @ts-nocheck

const config = {
  resolveLoader: {
    alias: {
      "our-first-loader": require.resolve("../../loader.js")
    }
  },
  module: {
    rules: [
      {
        test: /\.md/,
        enforce: "pre",
        use: [
          {
            loader: "our-first-loader",
            options: {
              warnings: true
            }
          }
        ]
      }
    ]
  }
};

module.exports = config;
