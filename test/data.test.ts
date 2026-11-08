import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { test } from 'node:test';
import { ALUMNI, FACULTY, FORMER_FACULTY, STUDENTS } from '../src/data.ts';
import { SEMESTERS } from '../src/seminars.ts';

test('faculty names are unique', () => {
  const names = FACULTY.map((f) => f.name);
  assert.equal(new Set(names).size, names.length);
});

test('former faculty are not also current faculty', () => {
  const current = new Set(FACULTY.map((f) => f.name));
  for (const { name } of FORMER_FACULTY) assert.ok(!current.has(name), `${name} is listed as both current and former`);
});

test('faculty URLs are absolute http(s) links', () => {
  for (const { name, url, lab } of [...FACULTY, ...FORMER_FACULTY.map((f) => ({ ...f, lab: undefined }))]) {
    if (url) assert.match(url, /^https?:\/\//, `${name} has a bad URL: ${url}`);
    if (lab) assert.match(lab.url, /^https?:\/\//, `${name} has a bad lab URL: ${lab.url}`);
  }
});

test('each student has a faculty advisor', () => {
  const names = new Set(FACULTY.map((f) => f.name));
  for (const { name, advisor } of STUDENTS) {
    assert.ok([...names].some((n) => n.includes(advisor)), `${name} has unknown advisor ${advisor}`);
  }
});

test('each alumnus has a known advisor', () => {
  const names = [...FACULTY, ...FORMER_FACULTY].map((f) => f.name);
  for (const { name, advisors } of ALUMNI) {
    assert.ok(
      advisors.some((a) => names.some((n) => n.includes(a))),
      `${name} has no advisor from the group: ${advisors.join(', ')}`,
    );
  }
});

test('alumni are sorted newest first and not duplicated', () => {
  const years = ALUMNI.map((a) => a.year);
  assert.deepEqual(years, [...years].sort((x, y) => y - x));
  assert.equal(new Set(ALUMNI.map((a) => a.name)).size, ALUMNI.length);
});

test('every referenced photo exists', () => {
  const people = [...FACULTY, ...FORMER_FACULTY, ...STUDENTS, ...ALUMNI];
  for (const { photo } of people) {
    if (photo) assert.ok(existsSync(new URL(`../public/people/${photo}`, import.meta.url)), `missing photo ${photo}`);
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
