import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Book } from '../../models/book';
import { BookService } from '../../services/book.service';
import { BookFormComponent } from './../book-form/book-form.component';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [CommonModule, BookFormComponent],
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Book[] = [];
  selectedBook: Book | null = null;

  constructor(private bookService: BookService) {}

  ngOnInit() {
    this.loadBooks();
  }

  loadBooks() {
    this.bookService.getBooks().subscribe((data) => {
      this.books = data;
    });
  }

  editBook(book: Book) {
    this.selectedBook = { ...book };
  }

  deleteBook(id: number) {
    this.bookService.deleteBook(id).subscribe(() => this.loadBooks());
  }

  onFormSubmit(book: Book) {
    if (book.id === 0) {
      this.bookService.addBook(book).subscribe(() => this.loadBooks());
    } else {
      this.bookService.updateBook(book).subscribe(() => this.loadBooks());
    }
    this.selectedBook = null;
  }

  onCancel() {
    this.selectedBook = null;
  }

  addNewBook() {
    this.selectedBook = {
      id: 0,
      title: '',
      author: '',
      isbn: '',
      publicationDate: '',
    };
  }
}
