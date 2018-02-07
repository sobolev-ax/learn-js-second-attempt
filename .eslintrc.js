module.exports = {
    "globals": {
        "window": true,
        "worker": true,
        "jquery": true,
        "prototypejs": true,
        "alert": true,
        "$": true,
        "document": true,
        "Element": true,
    },
    "rules": {
        "no-alert": 0,
        "no-console": 0,
        "no-plusplus": 0,
        "no-unused-vars": 1,
        "no-undef": 1,
        "prefer-const": 1,
        "no-restricted-syntax": 0,
    },
    "extends": "airbnb-base",
};