// @flow
'use strict';

// The `jest` global exists when running in jest ¯\_(ツ)_/¯
const _jest = require('./');
const path = require('path');

const success = path.join(__dirname, 'fixtures', 'success');
const failure = path.join(__dirname, 'fixtures', 'failure');

function expectError() {
  throw new Error('Expected Error');
}

test('success', () => {
  return _jest.test({ rootDir: success }).then(res => {
    expect(res.success).toBe(true);
    expect(res.numFailedTestSuites).toBe(0);
    expect(res.numPassedTestSuites).toBe(1);
  });
});

test('failure', () => {
  return _jest.test({ rootDir: failure }).then(expectError, err => {
    expect(err.message).toContain('Tests failed');
    expect(err.success).toBe(false);
    expect(err.numFailedTestSuites).toBe(1);
    expect(err.numPassedTestSuites).toBe(0);
  });
});
