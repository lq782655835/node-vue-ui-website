const chalk = require('chalk')

module.exports = {
    success: data => ({
        success: 1,
        detail: data,
        message: ''
    }),
    error: error => ({
        success: 0,
        detail: error,
        message: error.message
    }),
    l: (...str) => console.log(chalk.green(...str))
}
