import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Book } from '../../models/book';

@Component({
  selector: 'app-book-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent {
  @Input() book!: Book;
  @Output() submitted = new EventEmitter<Book>();
  @Output() cancelled = new EventEmitter<void>();

  formData: Book = {
    id: 0,
    title: '',
    author: '',
    isbn: '',
    publicationDate: ''
  };

  ngOnInit() {
    this.formData = { ...this.book };
  }

  onSubmit() {
    this.submitted.emit(this.formData);
  }

  onCancel() {
    this.cancelled.emit();
  }
}
