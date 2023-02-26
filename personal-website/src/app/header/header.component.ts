import { Component } from '@angular/core';
import { faBook, faHouse, faLightbulb } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  faHouse = faHouse;
  faLightbulb = faLightbulb;
  faBook = faBook;
}
