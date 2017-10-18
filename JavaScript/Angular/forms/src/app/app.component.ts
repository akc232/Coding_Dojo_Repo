import { Component } from '@angular/core';

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
