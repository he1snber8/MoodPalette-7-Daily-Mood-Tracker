import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-calendar-heatmap',
  templateUrl: './calendar-heatmap.component.html'
})
export class CalendarHeatmapComponent {
  @Input() moodMap: { [key: string]: string };
}
