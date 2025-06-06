import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav class="navbar">
      <div class="navbar-brand">My Book App</div>
      <ul class="navbar-menu">
        <li><a href="#" (click)="navigate('books')">Books</a></li>
        <li><a href="#" (click)="navigate('add')">Add Book</a></li>
      </ul>
    </nav>
  `,
  styles: [`
    .navbar {
      background-color: #2980b9;
      color: white;
      padding: 10px 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .navbar-brand {
      font-weight: bold;
      font-size: 1.5rem;
    }
    .navbar-menu {
      list-style: none;
      display: flex;
      gap: 15px;
      margin: 0;
      padding: 0;
    }
    .navbar-menu li a {
      color: white;
      text-decoration: none;
      cursor: pointer;
    }
    .navbar-menu li a:hover {
      text-decoration: underline;
    }
  `]
})
export class NavbarComponent {
  navigate(page: string) {
    console.log('Navigate to', page);
    // You can add real navigation here later
  }
}
