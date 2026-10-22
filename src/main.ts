import './style.css';
import { FACULTY, STUDENTS } from './data.ts';
import { SEMESTERS } from './seminars.ts';

const list = document.getElementById('faculty-list');
if (list) {
  list.replaceChildren(
    ...FACULTY.map(({ name, url }) => {
      const item = document.createElement('li');
      const link = document.createElement('a');
      link.href = url;
      link.textContent = name;
      item.append(link);
      return item;
    }),
  );
}

const count = document.getElementById('faculty-count');
if (count) count.textContent = String(FACULTY.length);

// A student has presented once a seminar in any semester, dated today or earlier, lists them as a speaker.
const today = new Date().toISOString().slice(0, 10);
const norm = (text: string) => text.replace(/\(.*?\)/g, '').trim().toLowerCase();
const presenters = new Set(
  SEMESTERS.flatMap((sem) => sem.seminars)
    .filter((s) => s.date <= today && s.speaker)
    .flatMap((s) => (s.speaker ?? '').split(/,|\/|&|\band\b/).map(norm)),
);
const hasPresented = ({ name, aliases = [] }: { name: string; aliases?: string[] }) =>
  [name, ...aliases].some((n) => presenters.has(norm(n)));

const students = document.getElementById('student-list');
if (students) {
  students.replaceChildren(
    ...STUDENTS.map((student) => {
      const { name, advisor } = student;
      const item = document.createElement('li');
      item.textContent = name;
      if (!hasPresented(student)) item.classList.add('not-presented');
      const advisorLine = document.createElement('small');
      advisorLine.textContent = `Advisor: ${advisor}`;
      advisorLine.style.display = 'block';
      advisorLine.style.opacity = '0.7';
      item.append(advisorLine);
      return item;
    }),
  );
}

const seminars = document.getElementById('seminars');
if (seminars) {
  seminars.replaceChildren(
    ...SEMESTERS.map(({ name, schedule, seminars: talks }, index) => {
      const section = document.createElement('details');
      section.open = index === 0;
      const summary = document.createElement('summary');
      summary.textContent = `${name} `;
      const when = document.createElement('small');
      when.textContent = schedule;
      summary.append(when);

      const rows = talks.map(({ date, title, speaker, note }) => {
        const row = document.createElement('tr');
        const cells = [date, [title, note && `(${note})`].filter(Boolean).join(' '), speaker ?? ''];
        for (const text of cells) {
          const cell = document.createElement('td');
          cell.textContent = text;
          row.append(cell);
        }
        return row;
      });
      const head = document.createElement('thead');
      head.innerHTML = '<tr><th>Date</th><th>Title</th><th>Speaker</th></tr>';
      const body = document.createElement('tbody');
      body.append(...rows);
      const table = document.createElement('table');
      table.append(head, body);
      const wrap = document.createElement('div');
      wrap.className = 'table-wrap';
      wrap.append(table);

      section.append(summary, wrap);
      return section;
    }),
  );
}
