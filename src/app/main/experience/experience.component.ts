import { Component } from '@angular/core';
import { Experience } from '../models/main-models';
import { works } from '../../information/info';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent {
  works: Experience[] = works;
}
