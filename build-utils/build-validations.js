const chalk = require("chalk");
const ERR_NO_ENV_FLAG = chalk.red(
    `You must pass an --env.env flag into your build for webpack to work! Try running 'yarn build' or 'yarn dev' for starters!`
);

module.exports = {
    ERR_NO_ENV_FLAG
};