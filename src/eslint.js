const confusingBrowserGlobals = require('confusing-browser-globals');

const linebreaks = require('./utils/linebreaks');

module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es2021: true,
        node: true,
        'shared-node-browser': true,
    },
    parser: '@babel/eslint-parser',
    parserOptions: {
        allowImportExportEverywhere: true,
        ecmaVersion: 'latest',
        requireConfigFile: false,
        sourceType: 'module',
    },
    reportUnusedDisableDirectives: true,
    rules: {
        'accessor-pairs': [
            'error',
            {
                getWithoutSet: true,
            },
        ],
        'array-bracket-spacing': ['error', 'never'],
        'array-element-newline': ['error', 'consistent'],
        'arrow-body-style': 'error',
        'arrow-parens': 'error',
        'arrow-spacing': 'error',
        'block-scoped-var': 'error',
        'block-spacing': 'error',
        'brace-style': 'error',
        camelcase: [
            'error',
            {
                ignoreDestructuring: true,
                ignoreImports: true,
            },
        ],
        'comma-dangle': ['error', 'always-multiline'],
        'comma-spacing': 'error',
        'comma-style': 'error',
        'computed-property-spacing': 'error',
        'consistent-return': 'error',
        'consistent-this': ['error', 'self'],
        'constructor-super': 'error',
        curly: 'error',
        'default-case': 'error',
        'default-case-last': 'error',
        'dot-location': ['error', 'property'],
        'dot-notation': 'error',
        'eol-last': 'error',
        eqeqeq: ['error', 'always'],
        'for-direction': 'error',
        'func-call-spacing': 'error',
        'function-call-argument-newline': ['error', 'consistent'],
        'generator-star-spacing': 'error',
        'getter-return': 'error',
        'grouped-accessor-pairs': ['error', 'getBeforeSet'],
        'guard-for-in': 'error',
        indent: [
            'error',
            4,
            {
                SwitchCase: 1,
            },
        ],
        'jsx-quotes': 'error',
        'key-spacing': 'error',
        'keyword-spacing': 'error',
        'linebreak-style': 'error',
        'max-classes-per-file': 'error',
        'max-statements-per-line': 'error',
        'new-cap': 'error',
        'new-parens': 'error',
        'no-alert': 'error',
        'no-array-constructor': 'error',
        'no-async-promise-executor': 'error',
        'no-await-in-loop': 'error',
        'no-bitwise': 'error',
        'no-buffer-constructor': 'error',
        'no-caller': 'error',
        'no-class-assign': 'error',
        'no-compare-neg-zero': 'error',
        'no-cond-assign': ['error', 'always'],
        'no-console': 'error',
        'no-const-assign': 'error',
        'no-constant-condition': [
            'error',
            {
                checkLoops: false,
            },
        ],
        'no-constructor-return': 'error',
        'no-continue': 'error',
        'no-control-regex': 'error',
        'no-debugger': 'error',
        'no-delete-var': 'error',
        'no-div-regex': 'error',
        'no-dupe-args': 'error',
        'no-dupe-class-members': 'error',
        'no-dupe-else-if': 'error',
        'no-dupe-keys': 'error',
        'no-duplicate-case': 'error',
        'import/no-duplicates': [
            'error',
            {
                includeExports: true,
            },
        ],
        'no-else-return': 'error',
        'no-empty-character-class': 'error',
        'no-empty-function': 'error',
        'no-empty-pattern': 'error',
        'no-eq-null': 'error',
        'no-eval': 'error',
        'no-ex-assign': 'error',
        'no-extend-native': 'error',
        'no-extra-bind': 'error',
        'no-extra-boolean-cast': 'error',
        'no-extra-label': 'error',
        'no-extra-parens': [
            'error',
            'all',
            {
                ignoreJSX: 'multi-line',
            },
        ],
        'no-extra-semi': 'error',
        'no-fallthrough': 'error',
        'no-floating-decimal': 'error',
        'no-global-assign': 'error',
        'no-implicit-coercion': [
            'error',
            {
                disallowTemplateShorthand: true,
            },
        ],
        'no-implicit-globals': [
            'error',
            {
                lexicalBindings: true,
            },
        ],
        'no-implied-eval': 'error',
        'no-import-assign': 'error',
        'no-inner-declarations': ['error', 'both'],
        'no-invalid-regexp': [
            'error',
            {
                allowConstructorFlags: ['u', 'y'],
            },
        ],
        'no-invalid-this': 'error',
        'no-irregular-whitespace': 'error',
        'no-iterator': 'error',
        'no-label-var': 'error',
        'no-labels': 'error',
        'no-lone-blocks': 'error',
        'no-lonely-if': 'error',
        'no-loop-func': 'error',
        'no-loss-of-precision': 'error',
        'no-misleading-character-class': 'error',
        'no-mixed-spaces-and-tabs': 'error',
        'no-multi-assign': 'error',
        'no-multi-spaces': 'error',
        'no-multi-str': 'error',
        'no-multiple-empty-lines': [
            'error',
            {
                max: 1,
            },
        ],
        'no-new': 'error',
        'no-new-func': 'error',
        'no-new-object': 'error',
        'no-new-symbol': 'error',
        'no-new-wrappers': 'error',
        'no-nonoctal-decimal-escape': 'error',
        'no-obj-calls': 'error',
        'no-octal': 'error',
        'no-octal-escape': 'error',
        'no-param-reassign': [
            'error',
            {
                props: true,
            },
        ],
        'no-promise-executor-return': 'error',
        'no-proto': 'error',
        'no-redeclare': [
            'error',
            {
                builtinGlobals: true,
            },
        ],
        'no-restricted-globals': ['error', ...confusingBrowserGlobals],
        'no-restricted-imports': [
            'error',
            {
                paths: [
                    {
                        message: 'Use `date-fns` instead.',
                        name: 'moment',
                    },
                ],
            },
        ],
        'no-return-assign': ['error', 'always'],
        'no-return-await': 'error',
        'no-script-url': 'error',
        'no-self-assign': 'error',
        'no-self-compare': 'error',
        'no-sequences': 'error',
        'no-setter-return': 'error',
        'no-shadow': [
            'error',
            {
                hoist: 'functions',
            },
        ],
        'no-shadow-restricted-names': 'error',
        'no-sparse-arrays': 'error',
        'no-tabs': 'error',
        'no-template-curly-in-string': 'error',
        'no-this-before-super': 'error',
        'no-throw-literal': 'error',
        'no-trailing-spaces': 'error',
        'no-undef': 'error',
        'no-undef-init': 'error',
        'no-unexpected-multiline': 'error',
        'no-unmodified-loop-condition': 'error',
        'no-unneeded-ternary': 'error',
        'no-unreachable': 'error',
        'no-unreachable-loop': 'error',
        'no-unsafe-finally': 'error',
        'no-unsafe-negation': [
            'error',
            {
                enforceForOrderingRelations: true,
            },
        ],
        'no-unsafe-optional-chaining': [
            'error',
            {
                disallowArithmeticOperators: true,
            },
        ],
        'no-unused-expressions': 'error',
        'no-unused-labels': 'error',
        'no-unused-private-class-members': 'error',
        'no-unused-vars': [
            'error',
            {
                args: 'after-used',
                caughtErrors: 'none',
                ignoreRestSiblings: true,
                vars: 'all',
            },
        ],
        'no-use-before-define': 'error',
        'no-useless-backreference': 'error',
        'no-useless-call': 'error',
        'no-useless-catch': 'error',
        'no-useless-computed-key': [
            'error',
            {
                enforceForClassMembers: true,
            },
        ],
        'no-useless-concat': 'error',
        'no-useless-constructor': 'error',
        'no-useless-escape': 'error',
        'no-useless-rename': 'error',
        'no-var': 'error',
        'no-void': [
            'error',
            {
                allowAsStatement: true,
            },
        ],
        'no-warning-comments': 'error',
        'no-whitespace-before-property': 'error',
        'no-with': 'error',
        'nonblock-statement-body-position': ['error', 'below'],
        'object-shorthand': 'error',
        'one-var-declaration-per-line': ['error', 'always'],
        'padded-blocks': ['error', 'never'],
        'padding-line-between-statements': ['error', ...linebreaks],
        'prefer-const': 'error',
        'prefer-exponentiation-operator': 'error',
        'prefer-numeric-literals': 'error',
        'prefer-object-has-own': 'error',
        'prefer-object-spread': 'error',
        'prefer-regex-literals': 'error',
        'prefer-rest-params': 'error',
        'prefer-spread': 'error',
        'prefer-template': 'error',
        'quote-props': [
            'error',
            'as-needed',
            {
                numbers: true,
                unnecessary: false,
            },
        ],
        quotes: [
            'error',
            'single',
            {
                avoidEscape: true,
            },
        ],
        radix: ['error', 'as-needed'],
        'require-await': 'error',
        'require-unicode-regexp': 'error',
        'require-yield': 'error',
        'rest-spread-spacing': 'error',
        semi: 'error',
        'semi-spacing': [
            'error',
            {
                after: true,
                before: false,
            },
        ],
        'semi-style': ['error', 'last'],
        'sort-keys': [
            'error',
            'asc',
            {
                caseSensitive: false,
                natural: true,
            },
        ],
        'space-before-blocks': 'error',
        'space-before-function-paren': [
            'error',
            {
                anonymous: 'always',
                asyncArrow: 'always',
                named: 'never',
            },
        ],
        'space-in-parens': 'error',
        'space-infix-ops': 'error',
        'space-unary-ops': [
            'error',
            {
                nonwords: false,
                words: true,
            },
        ],
        'spaced-comment': 'error',
        strict: ['error', 'never'],
        'switch-colon-spacing': 'error',
        'symbol-description': 'error',
        'template-curly-spacing': 'error',
        'unicode-bom': 'error',
        'use-isnan': 'error',
        'valid-typeof': 'error',
        'vars-on-top': 'error',
        'wrap-iife': ['error', 'any'],
        'yield-star-spacing': ['error', 'before'],
        yoda: ['error', 'never'],
    },
};
