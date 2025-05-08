'use strict';

const package2 = require('../src');
const assert = require('assert').strict;

assert.strictEqual(package2(), 'Hello from package2 - Edit 70');
console.info('package2 tests passed');
