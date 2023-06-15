import {Component} from '@angular/core';
import {Experience} from "../models/main-models";

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  works: Experience[] = [{
    date: '2022-2023',
    jobTitle: 'Front-End Developer',
    company: 'RSSchool',
    whatIDo: ['Completed a six-month JavaScript course, where I implemented over 10 projects, including team collaborations.', 'Completed a three-month Angular course, creating two applications using NgRx and RxJS, one of which was a team project', 'I also have experience in back-end development']
  }]

}
