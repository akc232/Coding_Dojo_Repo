import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  emails = [
     {email:'Achang@angular.com', important:true, subject: 'Javascript', content: 'Doin some Angular'},
     {email:'Jdoe@angular.com', important:true, subject: 'Javascript', content: 'Doin some Angularinnn'},
    { email:'MSanchez@angular.com', important:false, subject: 'Javascript', content: 'Doin some Angular cause im a morty'},
     {email:'RSanchez@angular.com', important:false, subject: 'Javascript', content: 'Doin some Angular, because shut up Morty.'}
 ]
}
