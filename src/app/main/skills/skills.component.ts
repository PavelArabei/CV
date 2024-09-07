import { Component } from '@angular/core';
import { Skills, skills } from '../../information/info';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent {
  public allSkills: Skills = skills;
  skillCategories = Object.keys(this.allSkills) as (keyof Skills)[];
}
