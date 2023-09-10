import { Component } from '@angular/core';
import { Course } from '../models/main-models';
import { courses } from '../../information/info';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
})
export class EducationComponent {
  public courses: Course[] = courses;
}
