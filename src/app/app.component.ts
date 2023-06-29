import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'armored-angular';

  constructor() {
    console.log('Welcome to Armored Angular');
  }

  changeOfRoutes() {
    window.scroll(0, 0);
  }
}
