module.exports = {
    // Specifies the ESLint parser
    parser: "@typescript-eslint/parser",

    extends: [
        // Uses the recommended rules from @typescript-eslint/eslint-plugin
        "plugin:@typescript-eslint/recommended",

        // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
        "prettier",

        // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
        "plugin:prettier/recommended",
    ],
    parserOptions: {
        // Allows for the parsing of modern ECMAScript features
        ecmaVersion: 2018,

        // Allows for the use of imports
        sourceType: "module",

        // Allows for the parsing of JSX
        ecmaFeatures: {
            jsx: true,
        },
    },
    rules: {
        // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
        // e.g. "@typescript-eslint/explicit-function-return-type": "off",

        // We have a lot of functions without explicit return type.
        "@typescript-eslint/explicit-function-return-type": "off",
    },
    settings: {
        react: {
            // Tells eslint-plugin-react to automatically detect the version of React to use
            version: "detect",
        },
    },
}
