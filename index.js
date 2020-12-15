module.exports = {
    "env": {
        // "browser": true,
        // "commonjs": true,
        "es6": true,
        // "node": true
    },
    "extends": [
        // "eslint:recommended"
    ],
    "globals": {},
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        'import',
        'standard'
    ],
    "root": true,
    "rules": {
        // ESLint: Possible Errors - These rules relate to possible syntax or logic errors.
        "for-direction": "error",
        "getter-return": "error",
        "no-async-promise-executor": "error",
        "no-await-in-loop": "error",
        "no-compare-neg-zero": "error",
        "no-cond-assign": "error",
        "no-console": "warn",
        "no-constant-condition": "error",
        "no-control-regex": "error",
        "no-debugger": "error",
        "no-dupe-args": "error",
        "no-dupe-else-if": "error",
        "no-dupe-keys": "error",
        "no-duplicate-case": "error",
        "no-empty": "error",
        "no-empty-character-class": "error",
        "no-ex-assign": "error",
        "no-extra-boolean-cast": "error",
        "no-extra-parens": "error",
        "no-extra-semi": "error",
        "no-func-assign": "error",
        "no-import-assign": "error",
        "no-inner-declarations": "error",
        "no-invalid-regexp": "error",
        "no-irregular-whitespace": "error",
        "no-loss-of-precision": "error",
        "no-misleading-character-class": "error",
        "no-obj-calls": "error",
        "no-promise-executor-return": "error",
        "no-prototype-builtins": "error",
        "no-regex-spaces": "error",
        "no-setter-return": "error",
        "no-sparse-arrays": "error",
        "no-template-curly-in-string": "error",
        "no-unexpected-multiline": "error",
        "no-unreachable": "error",
        "no-unreachable-loop": "error",
        "no-unsafe-finally": "error",
        "no-unsafe-negation": "error",
        "no-unsafe-optional-chaining": "error",
        "no-useless-backreference": "error",
        "require-atomic-updates": "error",
        "use-isnan": "error",
        "valid-jsdoc": "error",
        "valid-typeof": "error",
        // ESLint: Best Practices - These rules relate to better ways of doing things to help avoid problems.
        "accessor-pairs": "error",
        "array-callback-return": "error",
        "block-scoped-var": "error",
        "class-methods-use-this": "error",
        "complexity": [
            "error",
            35
        ],
        "consistent-return": "error",
        "curly": "error",
        "default-case": "error",
        "default-case-last": "error",
        "default-param-last": "error",
        "dot-location": [
            "error",
            "property"
        ],
        "dot-notation": "error",
        "eqeqeq": "error",
        "grouped-accessor-pairs": "error",
        "guard-for-in": "error",
        "max-classes-per-file": [
            "error",
            1
        ],
        "no-alert": "error",
        "no-caller": "error",
        "no-case-declarations": "error",
        "no-constructor-return": "error",
        "no-div-regex": "error",
        "no-else-return": "error",
        "no-empty-function": "error",
        "no-empty-pattern": "error",
        "no-eq-null": "error",
        "no-eval": "error",
        "no-extend-native": "error",
        "no-extra-bind": "error",
        "no-extra-label": "error",
        "no-fallthrough": "error",
        "no-floating-decimal": "error",
        "no-global-assign": "error",
        "no-implicit-coercion": "error",
        "no-implicit-globals": "error",
        "no-implied-eval": "error",
        "no-invalid-this": "error",
        "no-iterator": "error",
        "no-labels": "error",
        "no-lone-blocks": "error",
        "no-loop-func": "error",
        "no-magic-numbers": "off",
        "no-multi-spaces": "error",
        "no-multi-str": "error",
        "no-new": "error",
        "no-new-func": "error",
        "no-new-wrappers": "error",
        "no-nonoctal-decimal-escape": "error",
        "no-octal": "error",
        "no-octal-escape": "error",
        "no-param-reassign": "error",
        "no-proto": "error",
        "no-redeclare": "error",
        "no-restricted-properties": "error",
        "no-return-assign": "error",
        "no-return-await": "error",
        "no-script-url": "error",
        "no-self-assign": "error",
        "no-self-compare": "error",
        "no-sequences": "error",
        "no-throw-literal": "error",
        "no-unmodified-loop-condition": "error",
        "no-unused-expressions": "error",
        "no-unused-labels": "error",
        "no-useless-call": "error",
        "no-useless-catch": "error",
        "no-useless-concat": "error",
        "no-useless-escape": "error",
        "no-useless-return": "error",
        "no-void": "error",
        "no-warning-comments": "off",
        "no-with": "error",
        "prefer-named-capture-group": "error",
        "prefer-promise-reject-errors": "error",
        "prefer-regex-literals": "error",
        "radix": "error",
        "require-await": "error",
        "vars-on-top": "error",
        "wrap-iife": "error",
        "yoda": "error",
        // ESLint: Strict Mode - These rules relate to strict mode directives.
        "strict": [
            "error",
            "safe"
        ],
        // ESLint: Variables - These rules relate to variable declarations.
        "init-declarations": "error",
        "no-delete-var": "error",
        "no-label-var": "error",
        "no-restricted-globals": "error",
        "no-shadow": "error",
        "no-shadow-restricted-names": "error",
        "no-undef": "error",
        "no-undef-init": "error",
        "no-undefined": "off",
        "no-unused-vars": "warn",
        "no-use-before-define": "off",
        // ESLint: Stylistic Issues - These rules relate to style guidelines.
        "array-bracket-newline": "off",
        "array-bracket-spacing": "error",
        "array-element-newline": "off",
        "block-spacing": "error",
        "brace-style": [
            "error",
            "1tbs",
            {
                "allowSingleLine": true
            }
        ],
        "camelcase": "error",
        "capitalized-comments": "warn",
        "comma-dangle": "warn",
        "comma-spacing": "error",
        "comma-style": "error",
        "computed-property-spacing": "error",
        "consistent-this": "error",
        "eol-last": "error",
        "func-call-spacing": "error",
        "func-name-matching": "error",
        "func-names": "error",
        "func-style": "error",
        "function-call-argument-newline": "off",
        "function-paren-newline": "error",
        "id-denylist": "error",
        "id-length": "error",
        "id-match": "error",
        "implicit-arrow-linebreak": "error",
        "indent": [
            "warn",
            4,
            {
                "SwitchCase": 1
            }
        ],
        "jsx-quotes": "error",
        "key-spacing": "error",
        "keyword-spacing": "error",
        "line-comment-position": "off",
        "linebreak-style": "error",
        "lines-around-comment": "error",
        "lines-between-class-members": "error",
        "max-depth": [
            "error",
            5
        ],
        "max-len": [
            "error",
            200
        ],
        "max-lines": [
            "error",
            1500
        ],
        "max-lines-per-function": [
            "warn",
            80
        ],
        "max-nested-callbacks": "error",
        "max-params": [
            "error",
            {
                "max": 10
            }
        ],
        "max-statements": [
            "error",
            50
        ],
        "max-statements-per-line": [
            "error",
            {
                "max": 3
            }
        ],
        "multiline-comment-style": "off",
        "multiline-ternary": "off",
        "new-cap": "error",
        "new-parens": "error",
        "newline-per-chained-call": "error",
        "no-array-constructor": "error",
        "no-bitwise": "error",
        "no-continue": "off",
        "no-inline-comments": "off",
        "no-lonely-if": "error",
        "no-mixed-operators": "error",
        "no-mixed-spaces-and-tabs": "error",
        "no-multi-assign": "error",
        "no-multiple-empty-lines": "error",
        "no-negated-condition": "error",
        "no-nested-ternary": "error",
        "no-new-object": "error",
        "no-plusplus": "off",
        "no-restricted-syntax": "error",
        "no-tabs": "error",
        "no-ternary": "off",
        "no-trailing-spaces": "warn",
        "no-underscore-dangle": "off",
        "no-unneeded-ternary": "error",
        "no-whitespace-before-property": "error",
        "nonblock-statement-body-position": "error",
        "object-curly-newline": "error",
        "object-curly-spacing": [
            "error",
            "always"
        ],
        "object-property-newline": "off",
        "one-var": [
            "error",
            {
                "var": "never",
                "let": "never",
                "const": "never"
            }
        ],
        "one-var-declaration-per-line": "error",
        "operator-assignment": "error",
        "operator-linebreak": "error",
        "padded-blocks": "off",
        "padding-line-between-statements": "error",
        "prefer-exponentiation-operator": "error",
        "prefer-object-spread": "error",
        "quote-props": [
            "error",
            "as-needed"
        ],
        "quotes": [
            "warn",
            "single"
        ],
        "semi": [
            "warn",
            "always"
        ],
        "semi-spacing": "warn",
        "semi-style": "error",
        "sort-keys": "warn",
        "sort-vars": "error",
        "space-before-blocks": "error",
        "space-before-function-paren": [
            "error",
            {
                "anonymous": "always",
                "named": "never",
                "asyncArrow": "never"
            }
        ],
        "space-in-parens": "error",
        "space-infix-ops": "error",
        "space-unary-ops": "error",
        "spaced-comment": "error",
        "switch-colon-spacing": "error",
        "template-tag-spacing": "error",
        "unicode-bom": "error",
        "wrap-regex": "error",
        // ESLint: ECMAScript 6 - These rules relate to ES6, also known as ES2015.
        "arrow-body-style": "error",
        "arrow-parens": "error",
        "arrow-spacing": "error",
        "constructor-super": "error",
        "generator-star-spacing": "error",
        "no-class-assign": "error",
        "no-confusing-arrow": "error",
        "no-const-assign": "error",
        "no-dupe-class-members": "error",
        "no-duplicate-imports": "error",
        "no-new-symbol": "error",
        "no-restricted-exports": "error",
        "no-restricted-imports": "error",
        "no-this-before-super": "error",
        "no-useless-computed-key": "error",
        "no-useless-constructor": "error",
        "no-useless-rename": "error",
        "no-var": "error",
        "object-shorthand": "error",
        "prefer-arrow-callback": "error",
        "prefer-const": "error",
        "prefer-destructuring": "error",
        "prefer-numeric-literals": "error",
        "prefer-rest-params": "error",
        "prefer-spread": "error",
        "prefer-template": "error",
        "require-yield": "error",
        "rest-spread-spacing": "error",
        "sort-imports": "error",
        "symbol-description": "error",
        "template-curly-spacing": "error",
        "yield-star-spacing": "error",
        // Import
        "import/default": "error",
        "import/first": "off",
        "import/export": "error",
        "import/extensions": "off",
        "import/named": "error",
        "import/namespace": "error",
        "import/no-extraneous-dependencies": "off",
        "import/no-unresolved": "off",
        // Standard
        "standard/array-bracket-even-spacing": "warn",
        "standard/object-curly-even-spacing": [
            1,
            "either"
        ]
    }
};
