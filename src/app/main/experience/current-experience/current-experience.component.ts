import {Component, Input} from '@angular/core';
import {Experience} from "../../models/main-models";

@Component({
  selector: 'app-current-experience',
  templateUrl: './current-experience.component.html',
  styleUrls: ['./current-experience.component.scss']
})
export class CurrentExperienceComponent {
  @Input() work!: Experience

}
