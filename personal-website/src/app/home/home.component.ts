import { Component } from '@angular/core';
import { faArrowAltCircleRight, faBullseye, faFutbolBall, faGuitar, faHouse } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  faFutbol = faFutbolBall;
  faGuitar = faGuitar;
  faDart = faBullseye;
}
