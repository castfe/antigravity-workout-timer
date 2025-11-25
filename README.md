# Workout Timer App

## Overview
This is a web-based Workout Timer application designed to help users manage their workout intervals. It allows users to configure the number of sets, work duration, and rest duration. The app provides visual and auditory cues to guide the user through their workout.

## Technology Stack
- **HTML5**: Structure of the application.
- **CSS3**: Styling, including neon aesthetics and phase-specific themes.
- **Vanilla JavaScript (ES6+)**: Application logic, timer management, and DOM manipulation.

## File Structure

### Core Files
- **`index.html`**: The main entry point. Contains the HTML structure for the configuration form, timer display, and audio elements.
- **`script.js`**: Contains the core logic.
    - **State Management**: Tracks current set, time remaining, and workout phase (IDLE, WORK, REST, FINISHED).
    - **Timer Logic**: Uses `setInterval` for the countdown and handles phase transitions.
    - **UI Updates**: Updates the DOM based on the current state.
- **`style.css`**: Contains all styles. Uses CSS variables for theming (e.g., `--accent-work`, `--accent-rest`).

### Audio Assets
- **`start_set.wav`**: Played at the beginning of a work interval.
- **`end_set.wav`**: Played at the end of a work interval.
- **`start_rest.wav`**: Played at the beginning of a rest interval.
- **`end_rest.wav`**: Played at the end of a rest interval.

## Key Features

### 1. Configuration
Users can set:
- **Exercise Name**: Label for the current exercise.
- **Sets**: Total number of sets to perform.
- **Work Duration**: Time in seconds for the active workout phase.
- **Rest Duration**: Time in seconds for the rest phase.

### 2. Timer Logic
The timer operates in phases:
- **IDLE**: Initial state, waiting for user input.
- **WORK**: Active workout phase. Counts down `workTime`.
- **REST**: Rest phase between sets. Counts down `restTime`.
- **FINISHED**: Workout complete.

### 3. Audio Cues
The app uses specific audio files for transitions.
- **Important**: The `Audio` elements are defined in `index.html` with specific IDs (`audio-start-set`, `audio-end-set`, etc.). `script.js` references these IDs to play sounds.

## Agent Instructions
If you are an AI agent working on this codebase, please adhere to the following:

1.  **Preserve Audio IDs**: Do not change the IDs of the `<audio>` elements in `index.html` or their references in `script.js` unless you are refactoring the entire audio system. The logic depends on these specific IDs.
2.  **State Consistency**: When modifying `script.js`, ensure that the `state` object accurately reflects the UI. The `updateDisplay()` function is the central place for UI synchronization.
3.  **Timer Precision**: The current implementation uses `setInterval` with 1000ms. If higher precision is needed, consider a delta-time approach, but for now, the simple interval is sufficient.
4.  **Styling**: Maintain the neon/dark mode aesthetic defined in `style.css`. Use the CSS variables for colors.

## Usage
1.  Open `index.html` in a modern web browser.
2.  Enter workout details.
3.  Click "START WORKOUT".
4.  Follow the visual and audio cues.

## Deployment

### Live Demo
Once deployed, your workout timer will be available at:
```
https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/
```

### Deploy to GitHub Pages
This app can be deployed to GitHub Pages for free! See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed step-by-step instructions.

**Quick steps:**
1. Initialize git repository
2. Create GitHub repository (public)
3. Push your code
4. Enable GitHub Pages in repository settings
5. Access your live site!
