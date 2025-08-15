import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class MoodService {
  private key = 'moodData';
  load(): { [key: string]: string } {
    return JSON.parse(localStorage.getItem(this.key) || '{}');
  }
  save(data: { [key: string]: string }): void {
    localStorage.setItem(this.key, JSON.stringify(data));
  }
}
