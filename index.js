require('@rushstack/eslint-patch/modern-module-resolution');

const {mergeAndConcat} = require('merge-anything');

const json = require('./src/json');
const node = require('./src/node');

const config = mergeAndConcat(
    node,
    json
)

module.exports = config