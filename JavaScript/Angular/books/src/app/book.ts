export  class Book {
    id: number;
    title: string;
    author: string;
    year: number;
    pages: number;
    publisher: string;

   constructor(){
      this.id = Math.floor(Math.random()*100)
   }
}
