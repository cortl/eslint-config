// This is a workaround for: https://github.com/eslint/eslint/issues/3458
require('@rushstack/eslint-patch/modern-module-resolution');

const {mergeAndConcat} = require('merge-anything');

const babel = require('./src/babel');
const eslint = require('./src/eslint');
const comments = require('./src/comments');
const imprt = require('./src/import');
const jest = require('./src/jest');
const json = require('./src/json');
const next = require('./src/next');
const node = require('./src/node');
const prettier = require('./src/prettier');
const react = require('./src/react');
const security = require('./src/security');
const typescript = require('./src/typescript');
const unicorn = require('./src/unicorn');

const config = mergeAndConcat(
    comments,
    babel,
    eslint,
    imprt,
    jest,
    json,
    next,
    node,
    react,
    security,
    unicorn,
    // These need to be listed last, and in this order, to override
    // or modify rules in the various configs above, as needed.
    typescript,
    prettier
);

module.exports = config;
