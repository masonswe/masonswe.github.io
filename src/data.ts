/** Photo file name under public/people/; omitted means a placeholder is shown. */
type Photo = { photo?: string };

export interface Faculty extends Photo {
  name: string;
  url: string;
  /** Research lab or group, if the faculty member runs one. */
  lab?: { name: string; url: string };
}

// Keep sorted by last name.
export const FACULTY: Faculty[] = [
  { name: 'Simin Chen', url: 'https://siminchen.site/', photo: 'simin-chen.webp' },
  {
    name: 'Brittany Johnson',
    url: 'https://people.cs.gmu.edu/~johnsonb/',
    photo: 'brittany-johnson-matthews.webp',
    lab: { name: 'INSPIRED Lab', url: 'https://inspired.cs.gmu.edu/' },
  },
  {
    name: 'Wing Lam',
    url: 'https://people.cs.gmu.edu/~winglam/',
    photo: 'wing-lam.webp',
    lab: { name: 'Lam Lab', url: 'https://people.cs.gmu.edu/~winglam/lab/' },
  },
  {
    name: 'Thomas D LaToza',
    url: 'https://people.cs.gmu.edu/~tlatoza/',
    photo: 'thomas-latoza.webp',
    lab: { name: 'Developer Experience Design Lab (DevX)', url: 'https://devx.cs.gmu.edu/' },
  },
  { name: 'Andrian Marcus', url: 'https://www.andrianmarcus.net', photo: 'andrian-marcus.webp' },
  {
    name: 'ThanhVu (Vu) Nguyen',
    url: 'https://tvn.roars.dev/',
    photo: 'thanhvu-vu-nguyen.webp',
    lab: { name: 'Roars Lab', url: 'https://roars.dev/' },
  },
];

export interface FormerFaculty extends Photo {
  name: string;
  url?: string;
  /** Years at Mason, e.g. '2016–2020'. */
  years: string;
  /** How they left and where they are now. */
  now: string;
}

// Keep sorted by last name.
export const FORMER_FACULTY: FormerFaculty[] = [
  {
    name: 'Paul Ammann',
    url: 'https://people.cs.gmu.edu/~pammann/',
    photo: 'paul-ammann.webp',
    years: '1989–2024',
    now: 'Retired; Associate Professor Emeritus, George Mason',
  },
  {
    name: 'Jonathan Bell',
    url: 'https://www.jonbell.net/',
    photo: 'jonathan-bell.webp',
    years: '2016–2020',
    now: 'Associate Professor, Northeastern University',
  },
  { name: 'Richard Carver', years: 'until 2017', now: 'Retired' },
  {
    name: 'Kinga Dobolyi',
    url: 'https://www2.seas.gwu.edu/~kinga/',
    photo: 'kinga-dobolyi.webp',
    years: 'about 2010–2018',
    now: 'Associate Professor of Practice, George Washington University',
  },
  {
    name: 'Hassan Gomaa',
    url: 'https://mason.gmu.edu/~hgomaa/',
    photo: 'hassan-gomaa.webp',
    years: 'from 1987',
    now: 'Retired; Professor Emeritus, George Mason',
  },
  {
    name: 'Sam Malek',
    url: 'https://ics.uci.edu/~malek/',
    photo: 'sam-malek.webp',
    years: '2007–2015',
    now: 'Professor, UC Irvine',
  },
  {
    name: 'Kevin Moran',
    url: 'https://kpmoran.com/',
    photo: 'kevin-moran.webp',
    years: '2020–2023',
    now: 'Assistant Professor, University of Central Florida',
  },
  {
    name: 'Jeff Offutt',
    url: 'https://www.albany.edu/faculty/offutt/',
    photo: 'jeff-offutt.webp',
    years: '1992–2023',
    now: 'Professor and Chair of CS, University at Albany (SUNY)',
  },
  {
    name: 'David Rine',
    url: 'https://mason.gmu.edu/~drine/',
    years: 'from 1985',
    now: 'Retired; Professor Emeritus, George Mason',
  },
  {
    name: 'David S Rosenblum',
    url: 'https://people.cs.gmu.edu/~dsr/',
    photo: 'david-rosenblum.webp',
    years: '2020–2026',
    now: 'Retired from Mason; VP for Research, Constructor University',
  },
  { name: 'João Pedro Sousa', years: 'until 2012', now: 'Left for industry' },
];

export interface Alumnus extends Photo {
  name: string;
  url?: string;
  /** Advisors; at least one is listed in FACULTY or FORMER_FACULTY. */
  advisors: string[];
  /** PhD graduation year. */
  year: number;
  /** Current (or, when that is unknown, first) position, if known. */
  now?: string;
}

const A = 'Paul Ammann';
const B = 'Jonathan Bell';
const G = 'Hassan Gomaa';
const J = 'Brittany Johnson';
const L = 'Thomas D LaToza';
const M = 'Sam Malek';
const MO = 'Kevin Moran';
const N = 'ThanhVu (Vu) Nguyen';
const O = 'Jeff Offutt';

// PhD alumni, newest first.
export const ALUMNI: Alumnus[] = [
  { name: 'Didier Ishimwe', advisors: [N], year: 2026, now: 'ML Engineer, Experian', photo: 'didier-ishimwe.webp' },
  { name: 'S M Hasan Mansur', advisors: [L, MO], year: 2026, now: 'Assistant Professor, Stephen F. Austin State University' },
  { name: 'Ajay Krishna Vajjala', advisors: ['David S Rosenblum'], year: 2025, now: 'ML Software Engineer, Google' },
  { name: 'Arun Krishna Vajjala', advisors: [MO, J], year: 2025, now: 'ML Research Engineer, Apple' },
  { name: 'James Matthew Kukucka', advisors: [B, A], year: 2025, now: 'CTO, Dark Circuit Labs' },
  { name: 'Abdulrahman Alshammari', advisors: [B, A], year: 2024, now: "Assistant Professor, University of Ha'il" },
  { name: 'Maryam Arab', advisors: [L], year: 2024, now: 'Assistant Professor, University at Albany (SUNY)', photo: 'maryam-arab.webp' },
  { name: 'Sahar Mehrpour', advisors: [L], year: 2024, photo: 'sahar-mehrpour.webp' },
  {
    name: 'David Ignacio Gonzalez Samudio',
    advisors: [L],
    year: 2024,
    now: 'Assistant Professor (Teaching), George Mason',
    photo: 'david-samudio.webp',
  },
  { name: 'Emad Aghayi', advisors: [L], year: 2024, photo: 'emad-aghayi.webp' },
  { name: 'Abdulaziz Alaboudi', advisors: [L], year: 2023, photo: 'abdulaziz-alaboudi.webp' },
  { name: 'Kesina Baral', advisors: [O], year: 2022, now: 'CQSE' },
  { name: 'Yun Guo', advisors: [O], year: 2018, now: 'Cvent' },
  { name: 'Jason Porter', advisors: [G, 'Daniel Menascé'], year: 2018 },
  { name: 'Upsorn Praphamontripong', advisors: [O], year: 2017, now: 'University of Virginia' },
  { name: 'Lin Deng', advisors: [O], year: 2017, now: 'Towson University' },
  { name: 'Emad Albassam', advisors: [G], year: 2017 },
  { name: 'Ehsan Kouroshfar', advisors: [M], year: 2016, now: 'First job: Appian' },
  { name: 'Eric Yuan', advisors: [M, G], year: 2016, now: 'First job: Aerospace Corporation' },
  { name: 'Nariman Mirzaei', advisors: [M, A], year: 2016, now: 'First job: Videology' },
  { name: 'Vasilios Tzeremes', advisors: [G], year: 2016 },
  { name: 'Jing Guan', advisors: [O], year: 2015, now: 'Amazon' },
  { name: 'Riyadh Mahmood', advisors: [M], year: 2015, now: 'First job: Harris' },
  { name: 'Nan Li', advisors: [O], year: 2014, now: 'PayPal' },
  { name: 'Naeem Esfahani', advisors: [M], year: 2014, now: 'First job: Google' },
  { name: 'Wendy Jing Jin', advisors: [O], year: 2013, now: 'Airbnb' },
  { name: 'Guodong Shao', advisors: [A, 'Alex Brodsky'], year: 2013 },
  { name: 'Ahmed Elkhodary', advisors: [M], year: 2011, now: 'First job: U.S. SEC' },
  { name: 'Julie Street Fant', advisors: [G], year: 2011 },
  { name: 'Mohammad Abu-Matar', advisors: [G], year: 2011 },
  { name: 'Gary Kaminski', advisors: [A, O], year: 2010, now: 'CACI' },
  { name: 'Erika Olimpiew', advisors: [G], year: 2008 },
  { name: 'Aynur Abdurazik', advisors: [O], year: 2007, now: 'NASA / SAIC' },
  { name: 'Saket Kaushik', advisors: [A, 'Duminda Wijesekera'], year: 2007 },
  { name: 'Joseph Pamula', advisors: [A, 'Sushil Jajodia'], year: 2007 },
  { name: 'Mazen Saleh', advisors: [G], year: 2005 },
  { name: 'Mark Gianturco', advisors: [G], year: 2004 },
  { name: 'Seok-Won Lee', advisors: ['David Rine'], year: 2003 },
  { name: 'Mohammed Hussein', advisors: [G], year: 2003 },
  { name: 'Robert Pettit', advisors: [G], year: 2003, now: 'Professor of Practice, George Mason' },
  { name: 'Eonsuk (Michael) Shin', advisors: [G], year: 2002 },
  { name: 'Roger Alexander', advisors: [O], year: 2001, now: 'SEL' },
  { name: 'Diana Webber', advisors: [G], year: 2001 },
  { name: 'Zhenyi (Jenny) Jin', advisors: [O], year: 2000, now: 'Harris' },
  { name: 'Brian Blake', advisors: [G], year: 2000 },
  { name: 'Peng Liu', advisors: [A, 'Sushil Jajodia'], year: 1999 },
  { name: 'Michelle Lee', advisors: [O], year: 1998, now: 'CTO, ITHAKA' },
  { name: 'Jane Hayes', advisors: [O], year: 1998, now: 'Professor, University of Kentucky' },
  { name: 'Ghulam Farrukh', advisors: [G], year: 1998 },
  { name: 'Indrakshi Ray', advisors: [A], year: 1997 },
  { name: 'Kevin Mills', advisors: [G], year: 1995 },
  { name: 'Vijayan Sugumaran', advisors: [G, 'Larry Kerschberg'], year: 1993 },
  { name: 'Elizabeth O\'Hara-Schettino', advisors: [G], year: 1993 },
];

export interface Student extends Photo {
  name: string;
  url?: string;
  advisor: string;
  coAdvisor?: string;
  /** Names the seminar schedule uses for this student, e.g. first name only. */
  aliases?: string[];
}

// Current PhD students, grouped by advisor.
export const STUDENTS: Student[] = [
  { name: 'Ebtesam Al Haque', aliases: ['Ebtesam'], advisor: 'Brittany Johnson', photo: 'ebtesam-al-haque.webp' },
  { name: 'Elijah Adejumo', aliases: ['Elijah'], advisor: 'Brittany Johnson' },
  { name: 'Fairuz Nawer Meem', aliases: ['Fairuz'], advisor: 'Brittany Johnson', photo: 'fairuz-nawer-meem.webp' },
  { name: 'Sadia Afrin Mim', aliases: ['Sadia'], advisor: 'Brittany Johnson', photo: 'sadia-afrin-mim.webp' },
  { name: 'Mohammadreza Noei', aliases: ['Reza'], advisor: 'Brittany Johnson', photo: 'mohammadreza-noei.webp' },
  { name: 'Fatemeh Vares', aliases: ['Fatemeh'], advisor: 'Brittany Johnson' },
  { name: 'Fatema Tuz Zohra', aliases: ['Fatema'], advisor: 'Brittany Johnson' },
  { name: 'Talank Baral', aliases: ['Talank'], advisor: 'Wing Lam' },
  { name: 'Safwat Ali Khan', aliases: ['Safwat'], advisor: 'Wing Lam' },
  { name: 'Md. Mahmudul Hasan Pious', aliases: ['Pious'], advisor: 'Wing Lam' },
  { name: 'Suzzana Rafi', advisor: 'Wing Lam' },
  { name: 'Ying Zhou', aliases: ['Ying'], advisor: 'Wing Lam', coAdvisor: 'Andrian Marcus' },
  { name: 'Farina Faiz', aliases: ['Farina'], advisor: 'Thomas D LaToza', coAdvisor: 'Vivian Motti' },
  { name: 'David Farmer', advisor: 'Thomas D LaToza', coAdvisor: 'Jeff Offutt' },
  { name: 'Mainul Hossain', aliases: ['Mainul'], advisor: 'Thomas D LaToza', photo: 'mainul-hossain.webp' },
  { name: 'Ruochen Wang', aliases: ['Ruochen'], advisor: 'Thomas D LaToza', photo: 'ruochen-wang.webp' },
  { name: 'Hai Duong', aliases: ['Hai'], advisor: 'ThanhVu (Vu) Nguyen', photo: 'hai-duong.webp' },
  { name: 'Long Doan', aliases: ['Long'], advisor: 'ThanhVu (Vu) Nguyen', photo: 'long-doan.webp' },
  { name: 'Nguyen Ho', advisor: 'ThanhVu (Vu) Nguyen' },
  { name: 'Linhan Li', aliases: ['Linhan'], advisor: 'ThanhVu (Vu) Nguyen', photo: 'linhan-li.webp' },
];
