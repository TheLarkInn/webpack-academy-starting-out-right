const commonConfig = require("./build-utils/webpack.common");
const webpackMerge = require("webpack-merge");

const addons = (/* string | string[] */ addonsArg) => {
    let addons = [...addonsArg]  // Normalize array of addons (flatten)
        .filter(Boolean);        // If addons is undefined, filter it out

    return addons.map((addonName) => require(`./build-utils/addons/webpack.${addonName}.js`));
};

module.exports = (env) => {
    console.log(env);
    if (!env) {
        throw new Error(`You must pass an --env.env flag into your build for webpack to work!`)
    };
    
    const envConfig = require(`./build-utils/webpack.${env.env}.js`);
    const mergedConfig = webpackMerge(commonConfig, envConfig, ...addons(env.addons));

    return mergedConfig;
}