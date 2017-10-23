import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Book } from './book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   books: Array<Book> = [];
   book: Book = new Book();

   onSubmit(event: Event, form: NgForm) {
     event.preventDefault();
     console.log(this.book);
     console.log( 'testing the form!');

     this.books.push(this.book);
     console.log(this.books);
     this.book = new Book


   }
}
