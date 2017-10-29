import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Book } from './book';
import { BOOKS } from './data/book-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   books: Array<Book> = BOOKS;
   book: Book = new Book();
   selectedBook: Book;

   onSubmit(event: Event, form: NgForm) {
     event.preventDefault();
     console.log(this.book);
     console.log( 'testing the form!');

     this.books.push(this.book);
     this.book = new Book
     console.log(this.books);


   }

   selectBook(book:Book){
      console.log('selected a book', book);
      this.selectedBook = this.selectedBook === book ? null : book;
      //this is a terinary?

      // if(this.selectedBook === book){
      //    this.selectedBook = null;
      // } else{
      //    this.selectedBook = book;
      // }
   };
}
