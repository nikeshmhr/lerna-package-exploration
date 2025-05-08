'use strict';

const package1 = require('../src');
const assert = require('assert').strict;

assert.strictEqual(package1(), 'Hello from package1 - Edit 100');
console.info('package1 tests passed');
