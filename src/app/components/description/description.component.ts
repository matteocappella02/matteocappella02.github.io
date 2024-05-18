import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-description',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent implements OnInit {
  static FIRST_YEAR_WORK = 2018;
  experienceYears = 0;

  ngOnInit(): void {
    const currentYear = (new Date()).getFullYear();
    this.experienceYears = currentYear - DescriptionComponent.FIRST_YEAR_WORK;
  }
}
