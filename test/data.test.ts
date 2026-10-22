import assert from 'node:assert/strict';
import { test } from 'node:test';
import { FACULTY, STUDENTS } from '../src/data.ts';
import { SEMESTERS } from '../src/seminars.ts';

test('faculty names are unique', () => {
  const names = FACULTY.map((f) => f.name);
  assert.equal(new Set(names).size, names.length);
});

test('faculty URLs are absolute http(s) links', () => {
  for (const { name, url } of FACULTY) {
    assert.match(url, /^https?:\/\//, `${name} has a bad URL: ${url}`);
  }
});

test('each student has a faculty advisor', () => {
  const names = new Set(FACULTY.map((f) => f.name));
  for (const { name, advisor } of STUDENTS) {
    assert.ok([...names].some((n) => n.includes(advisor)), `${name} has unknown advisor ${advisor}`);
  }
});

test('seminar dates are valid, unique and sorted within each semester', () => {
  for (const { name, seminars } of SEMESTERS) {
    const dates = seminars.map((s) => s.date);
    for (const d of dates) assert.match(d, /^\d{4}-\d{2}-\d{2}$/, `${name}: bad date ${d}`);
    assert.deepEqual(dates, [...dates].sort(), `${name} is not sorted`);
    assert.equal(new Set(dates).size, dates.length, `${name} has duplicate dates`);
  }
});
