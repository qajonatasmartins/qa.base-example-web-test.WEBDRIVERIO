module.exports = {
    "env": {
        "es6": true,
        "mocha": true
    },
    "globals": {
        "$": true,
        "$$": true,
        "browser": true,
        "expect": true
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "mocha",
        "@babel"
    ]
};