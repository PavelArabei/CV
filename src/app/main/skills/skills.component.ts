import { Component } from '@angular/core';
import { skills } from '../../information/info';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent {
  public skills: string[] = skills;
}
