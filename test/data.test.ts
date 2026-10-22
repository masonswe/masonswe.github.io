import assert from 'node:assert/strict';
import { test } from 'node:test';
import { FACULTY } from '../src/data.ts';

test('faculty names are unique', () => {
  const names = FACULTY.map((f) => f.name);
  assert.equal(new Set(names).size, names.length);
});

test('faculty URLs are absolute http(s) links', () => {
  for (const { name, url } of FACULTY) {
    assert.match(url, /^https?:\/\//, `${name} has a bad URL: ${url}`);
  }
});
