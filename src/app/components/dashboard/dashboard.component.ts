import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { DescriptionComponent } from '../description/description.component';
import { SkillsComponent } from '../skills/skills.component';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, DescriptionComponent, SkillsComponent, FontAwesomeModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

}
