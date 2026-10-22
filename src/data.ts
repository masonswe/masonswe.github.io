export interface Faculty {
  name: string;
  url: string;
}

// Keep sorted by last name.
export const FACULTY: Faculty[] = [
  { name: 'Simin Chen', url: 'https://siminchen.site/' },
  { name: 'Brittany Johnson', url: 'https://cs.gmu.edu/~johnsonb/' },
  { name: 'Wing Lam', url: 'https://cs.gmu.edu/~winglam/' },
  { name: 'Thomas D Latoza', url: 'https://cs.gmu.edu/~tlatoza/' },
  { name: 'Andrian Marcus', url: 'https://www.andrianmarcus.net' },
  { name: 'ThanhVu (Vu) Nguyen', url: 'https://nguyenthanhvuh.github.io' },
  { name: 'David S Rosenblum', url: 'https://cs.gmu.edu/~dsr/' },
];

export interface Student {
  name: string;
  advisor: string;
  /** Names the seminar schedule uses for this student, e.g. first name only. */
  aliases?: string[];
}

// Current students, grouped by advisor. Simin Chen's site lists none yet.
export const STUDENTS: Student[] = [
  { name: 'Talank Baral', aliases: ['Talank'], advisor: 'Wing Lam' },
  { name: 'Safwat Ali Khan', aliases: ['Safwat'], advisor: 'Wing Lam' },
  { name: 'Md. Mahmudul Hasan Pious', aliases: ['Pious'], advisor: 'Wing Lam' },
  { name: 'Suzzana Rafi', advisor: 'Wing Lam' },
  { name: 'Hamaad Zuberi', advisor: 'Wing Lam' },
  { name: 'Ying Zhou', aliases: ['Ying'], advisor: 'Wing Lam' },
  { name: 'Ebtesam Al Haque', aliases: ['Ebtesam'], advisor: 'Brittany Johnson' },
  { name: 'Adam Essawi', advisor: 'Brittany Johnson' },
  { name: 'Nursena Kurubas', advisor: 'Brittany Johnson' },
  { name: 'Fairuz Nawer Meem', aliases: ['Fairuz'], advisor: 'Brittany Johnson' },
  { name: 'Sadia Afrin Mim', aliases: ['Sadia'], advisor: 'Brittany Johnson' },
  { name: 'Mohammadreza Noei', advisor: 'Brittany Johnson' },
  { name: 'Desire Omotoye', advisor: 'Brittany Johnson' },
];
