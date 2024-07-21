import { Component } from '@angular/core';


interface Books {
  name: string | null;
  author: string | null;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
  
  
export class AppComponent {
  books: Books[] = [
    {
      name: 'Дубровский',
      author: 'Пушкин',
    },
    {
      name: 'Мцыри',
      author: 'Лермонтов',
    },
  ];

  create_book = {
    name: null,
    author: null,
  };

  createBook() {
    this.books.push({
      name: this.create_book.name,
      author: this.create_book.author,
    });
  }
  
}
