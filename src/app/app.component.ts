import { Component } from '@angular/core';
import { MoodService } from './mood.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  moodMap = this.moodService.load();
  constructor(private moodService: MoodService) {}
  onMood(m: string) {
    const day = new Date().toISOString().slice(0,10);
    this.moodMap[day] = m;
    this.moodService.save(this.moodMap);
  }
}
