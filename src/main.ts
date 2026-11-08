import './style.css';
import { ALUMNI, FACULTY, FORMER_FACULTY, STUDENTS } from './data.ts';
import { SEMESTERS } from './seminars.ts';

type Line = string | { text: string; url: string; prefix?: string };

/** Builds a person card: photo (or placeholder), name (linked if a URL is given), then detail lines. */
function card(name: string, url: string | undefined, photo: string | undefined, lines: Line[]): HTMLLIElement {
  const item = document.createElement('li');
  const img = document.createElement('img');
  img.src = `/people/${photo ?? 'default.svg'}`;
  img.alt = photo ? name : '';
  img.loading = 'lazy';
  img.className = 'avatar';
  const body = document.createElement('div');
  const title = document.createElement(url ? 'a' : 'span');
  title.className = 'name';
  if (title instanceof HTMLAnchorElement && url) title.href = url;
  title.textContent = name;
  body.append(title);
  for (const line of lines) {
    const small = document.createElement('small');
    if (typeof line === 'string') small.textContent = line;
    else {
      const link = document.createElement('a');
      link.href = line.url;
      link.textContent = line.text;
      small.append(line.prefix ?? '', link);
    }
    body.append(small);
  }
  item.append(img, body);
  return item;
}

const fill = (id: string, items: HTMLLIElement[]) => document.getElementById(id)?.replaceChildren(...items);

fill(
  'faculty-list',
  FACULTY.map(({ name, url, photo, lab }) =>
    card(name, url, photo, lab ? [{ prefix: 'Lab: ', text: lab.name, url: lab.url }] : []),
  ),
);

fill(
  'former-faculty-list',
  FORMER_FACULTY.map(({ name, url, photo, years, now }) => card(name, url, photo, [`At Mason ${years}`, now])),
);

fill(
  'alumni-list',
  ALUMNI.map(({ name, url, photo, advisors, year, now }) =>
    card(name, url, photo, [`PhD ${year} · ${advisors.join(' & ')}`, ...(now ? [now] : [])]),
  ),
);

for (const count of document.querySelectorAll('.faculty-count')) count.textContent = String(FACULTY.length);

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

fill(
  'student-list',
  STUDENTS.map((student) => {
    const advisors = [student.advisor, student.coAdvisor].filter(Boolean).join(' & ');
    const item = card(student.name, student.url, student.photo, [`Advisor: ${advisors}`]);
    if (!hasPresented(student)) item.classList.add('not-presented');
    return item;
  }),
);

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
