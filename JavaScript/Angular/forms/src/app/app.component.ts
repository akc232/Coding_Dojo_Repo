import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   user = {
      firstName: '',
      lastName: '',
   }

  onSubmit(){
   console.log('onSubmit()');
   console.log(this.user);

   this.user = {
      firstName:'',
      lastName:'',
   }
 }
}
