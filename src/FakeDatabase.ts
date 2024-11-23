export interface Book {
  id: number;
  title: string;
  author: string;
  publicationYear: number;
}

export const books: Book[] = [
  {
    id: 1,
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    publicationYear: 1960,
  },
  {
    id: 2,
    title: '1984',
    author: 'George Orwell',
    publicationYear: 1949,
  },
  {
    id: 3,
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    publicationYear: 1813,
  },
  {
    id: 4,
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    publicationYear: 1925,
  },
  {
    id: 5,
    title: 'Moby-Dick',
    author: 'Herman Melville',
    publicationYear: 1851,
  },
  {
    id: 6,
    title: 'War and Peace',
    author: 'Leo Tolstoy',
    publicationYear: 1869,
  },
  {
    id: 7,
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    publicationYear: 1951,
  },
  {
    id: 8,
    title: 'Crime and Punishment',
    author: 'Fyodor Dostoevsky',
    publicationYear: 1866,
  },
  {
    id: 9,
    title: 'Brave New World',
    author: 'Aldous Huxley',
    publicationYear: 1932,
  },
  {
    id: 10,
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    publicationYear: 1937,
  },
];
