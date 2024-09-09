import { Component, input } from '@angular/core';

type Image = { src: string; alt: string };

@Component({
  selector: 'app-dashboard-item',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-item.component.html',
  styleUrl: './dashboard-item.component.css',
})
export class DashboardItemComponent {
  // @Input({ required: true }) image!: Image;
  // @Input({ required: true }) title = '';
  image = input.required<Image>();
  title = input.required<string>();
}
