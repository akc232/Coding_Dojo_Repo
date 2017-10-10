import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   time = new Date();
   tz= 'Central Standard Time'
   lastTimeZone = null;

   dateByZone(timezone){
      this.time = new Date();
      if (timezone === 'PST'){
         this.tz='Pacific Standard Time'
         this.time.setHours(this.time.getHours() - 2)
      } else if (timezone === 'MST') {
         this.tz = 'Mountain Standard Time'
         this.time.setHours(this.time.getHours() - 1)
      } else if (timezone === 'CST') {
         this.tz = 'Central Standard Time'
         this.time.setHours(this.time.getHours())
      } else if (timezone === 'EST') {
         this.tz = 'Eastern Standard Time'
         this.time.setHours(this.time.getHours() + 2)
      }
      this.lastTimeZone = timezone
   }

}
