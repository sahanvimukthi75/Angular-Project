import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Book } from '../../models/book';
import { BookService } from '../../services/book.service';
import { BookFormComponent } from './../book-form/book-form.component';
import { NgChartsModule } from 'ng2-charts';
import { ChartConfiguration, ChartType } from 'chart.js';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [CommonModule, BookFormComponent, NgChartsModule],
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Book[] = [];
  selectedBook: Book | null = null;

  public chartData: ChartConfiguration<'doughnut'>['data'] = {
    labels: [],
    datasets: [{
      data: [],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40']
    }]
  };
  public chartType: ChartType = 'doughnut';

  constructor(private bookService: BookService) {}

  ngOnInit() {
    this.loadBooks();
  }

  loadBooks() {
    this.bookService.getBooks().subscribe((data) => {
      this.books = data;
      this.prepareChartData();
    });
  }

  prepareChartData() {
    const authorCountMap = new Map<string, number>();

    this.books.forEach(book => {
      authorCountMap.set(book.author, (authorCountMap.get(book.author) || 0) + 1);
    });

    const labels = Array.from(authorCountMap.keys());
    const data = Array.from(authorCountMap.values());

    // Replace the entire chartData object to trigger change detection and update chart
    this.chartData = {
      labels: labels,
      datasets: [{
        data: data,
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40']
      }]
    };
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
