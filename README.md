# MoodPalette-7-Daily-Mood-Tracker

Description
A simple and visually appealing web app that allows users to log their daily moods and view them as a colorful calendar heatmap.

## Tech Stack
- Angular

## Requirements
- Mood selection interface (use emoji or color buttons for mood selection)
- Calendar heatmap display (map moods to colors and show them on a monthly grid)
- Local storage persistence (save moods locally so data stays after refresh)

## Installation
1. Ensure you have Node.js and npm installed.
2. Install Angular CLI globally:
   bash
   npm install -g @angular/cli
   
3. Clone the repository:
   bash
   git clone https://github.com/<your-username>/MoodPalette-7-Daily-Mood-Tracker.git
   
4. Navigate into the project folder:
   bash
   cd MoodPalette-7-Daily-Mood-Tracker
   
5. Install dependencies:
   bash
   npm install
   

## Usage
1. Start the development server:
   bash
   ng serve
   
2. Open your browser and go to http://localhost:4200
3. Select your mood each day using the emoji or color buttons and watch your entries populate the calendar heatmap.

## Implementation Steps
1. Create a new Angular project:
   bash
   ng new MoodPalette-7-Daily-Mood-Tracker
   
2. Generate components:
   bash
   ng generate component mood-selector
   ng generate component heatmap-calendar
   
3. Build a `MoodStorageService` to handle saving and retrieving moods from `localStorage`.
4. Implement `MoodSelectorComponent` with emoji/color buttons that call the service to store the selected mood for the current date.
5. Implement `HeatmapCalendarComponent` to:
   - Read stored moods from the service
   - Map each mood to a color
   - Render a monthly grid using CSS Flexbox or Grid
6. Style both components for a clean, responsive UI and color-coded heatmap cells.
7. Test persistence by reloading the app; verify that logged moods remain displayed in the heatmap.

## API Endpoints
This application does not use any external APIs or back-end services. All data is stored locally in the browser's Local Storage.