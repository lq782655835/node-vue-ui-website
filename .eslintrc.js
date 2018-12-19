module.exports = {
    extends: [
        // add more generic rulesets here, such as:
        'standard',
        'plugin:vue/essential'
    ],
    env: {
        browser: true,
        commonjs: true,
        es6: true,
        jest: true,
        node: true
    },
    rules: {
        // override/add rules settings here, such as:
        // 'vue/no-unused-vars': 'error'
        'indent': ['error', 4]
    }
};