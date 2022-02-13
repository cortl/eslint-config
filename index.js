require('@rushstack/eslint-patch/modern-module-resolution');

const {mergeAndConcat} = require('merge-anything');

const node = require('./src/node');

const config = mergeAndConcat(
    node
)

module.exports = config