import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-mood-selector',
  templateUrl: './mood-selector.component.html'
})
export class MoodSelectorComponent {
  @Output() moodSelected = new EventEmitter<string>();
  moods = ['😀','😔','😡','😴'];
  select(m: string) { this.moodSelected.emit(m); }
}
