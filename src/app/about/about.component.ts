import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  myBirthday: string = 'March 2, 2002';
  myPhoneNo: string = '+639123456789';

  showAge($event: any) {
    console.log('20');
    if ($event) {
      console.log($event.target);
      console.log($event.target.value);
    }
  }
  showEmail($event: any) {
    console.log('mora@gmail.com');
    if ($event) {
      console.log($event.target);
      console.log($event.target.value);
    }
  }
}
