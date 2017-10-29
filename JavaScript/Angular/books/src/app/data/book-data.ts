import { Book } from '../book';

export const BOOKS: Book[]= [
{
   id: randomId(),
   title: 'stanger things',
   author: 'some netflix',
   publisher: 'Netflix',
   year: 2016,
   pages: 10
},
{
   id: randomId(),
   title: 'Me!',
   author: 'Andrew',
   publisher: 'Chang',
   year: 1990,
   pages: 2039890248029
},
];

function randomId(): number {
   return Math.floor(Math.random()*100)
};
