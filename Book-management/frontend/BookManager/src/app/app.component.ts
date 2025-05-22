import { Component } from '@angular/core';
import { BookListComponent } from '../app/components/book-list/book-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BookListComponent],
  template: `
    <h1>Book Manager</h1>
    <app-book-list></app-book-list>
  `,
  styles: [`
    h1 {
      text-align: center;
      margin-top: 20px;
      font-size: 2.5rem;
      color: #2c3e50;
    }
  `]
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
}
