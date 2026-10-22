import './style.css';
import { FACULTY } from './data.ts';

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
