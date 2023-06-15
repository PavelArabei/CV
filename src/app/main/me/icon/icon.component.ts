import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent {
  @Input() name!: string;
  @Input() link!: string;
  @Input() smallScreen!: boolean
  @Input() iconName?: string

  get ico() {
    return this.iconName || ''
  }
}
