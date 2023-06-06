import {Component} from '@angular/core';
import {social} from "../information/info";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  social = social
}
