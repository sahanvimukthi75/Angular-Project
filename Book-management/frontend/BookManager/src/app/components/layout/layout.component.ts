import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/avbar.component';
import { BookListComponent } from '../book-list/book-list.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, NavbarComponent, BookListComponent],
  template: `
    <app-navbar></app-navbar>
    <main class="main-content">
      <app-book-list></app-book-list>
    </main>
  `,
  styles: [`
    .main-content {
      margin: 20px;
      padding: 10px;
    }
  `]
})
export class LayoutComponent {}
