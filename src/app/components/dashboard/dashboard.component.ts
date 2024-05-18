import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFacebook, faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { CarouselModule } from 'primeng/carousel';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, CarouselModule, FontAwesomeModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  static FIRST_YEAR_WORK = 2018;

  linkedinIcon = faLinkedin;
  githubIcon = faGithub;
  instagramIcon = faInstagram;
  facebookIcon = faFacebook;

  experienceYears = 0;

  ngOnInit(): void {
    const currentYear = (new Date()).getFullYear();
    this.experienceYears = currentYear - DashboardComponent.FIRST_YEAR_WORK;
  }
}
