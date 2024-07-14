import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  constructor(public booksServ: BooksService) { 
  }
  book: any;
  ngOnInit(): void {
    this.book = this.booksServ.testData;
  }

}
