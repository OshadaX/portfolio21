import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']  // Corrected the typo from styleUrl to styleUrls
})
export class ProjectsComponent {
  // Project data array
  projects = [
    {
      title: 'Portfolio Website',
      description: 'Modern responsive portfolio built with Angular',
      imageUrl: 'assets/images/projects/web.webp',
      altText: 'Portfolio Website'
    },
    {
      title: 'E-commerce Platform',
      description: 'Full-stack e-commerce platform',
      imageUrl: 'assets/images/projects/ui.webp',
      altText: 'E-commerce'
    },
    {
      title: 'App Development',
      description: 'Cross-platform mobile app',
      imageUrl: 'assets/images/projects/app.webp',
      altText: 'App Development'
    }
  ];
}
