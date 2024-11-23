import { Injectable } from '@nestjs/common';
import { Book, books } from './FakeDatabase';

@Injectable()
export class BooksService {
  getAllBooks(): Book[] {
    return books;
  }

  findById(bookId: number): Book | undefined {
    return books.find((book) => book.id === bookId);
  }

  create(bookData: Partial<Book>): Book {
    const newBook: Book = {
      id: books.length ? books[books.length - 1].id + 1 : 1,
      ...{ title: '', author: '', publicationYear: 0, ...bookData },
    };
    books.push(newBook);
    return newBook;
  }

  update(bookId: number, updatedBookFields: Partial<Book>): Book | undefined {
    const bookIndex = books.findIndex((book) => book.id === bookId);
    if (bookIndex === -1) return undefined;

    books[bookIndex] = { ...books[bookIndex], ...updatedBookFields };
    return books[bookIndex];
  }

  delete(bookId: number): Book[] {
    const bookIndex = books.findIndex((book) => book.id === bookId);
    if (bookIndex !== -1) books.splice(bookIndex, 1);
    return books;
  }
}
