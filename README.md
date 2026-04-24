# FocusSync 🎯

FocusSync is a highly customizable, gamified productivity and focus-tracking application. Designed for students, professionals, and intense learners, it combines rigid daily planning with RPG-like progression to keep you deeply engaged in your work.

## ✨ Key Features

* **Strict Long-Term Plans**: Configure focused sprints (e.g., 30, 60, or 90 days) with specific subjects, target hours, and custom Pomodoro block durations. Templates stay strictly within their defined dates.
* **Dynamic Daily Planner**: Drag-and-drop daily tasks to reorder your day. Make isolated overrides for "today" via the *Edit Day* flow without breaking your long-term master template.
* **Zen Mode & Mini Player**: Immerse yourself in deep work with a massive, distraction-free fullscreen timer, or tuck the timer away in a sleek Desktop Mini-Player widget. Includes built-in ambient audio (Brown Noise).
* **RPG Gamification**: Earn XP, climb ranks, maintain daily streaks, and unlock creative achievement badges by hitting your goals.
* **Skill Trees (Radar Charts)**: Visualize your subject mastery and time allocation dynamically through beautifully animated RPG-style skill tree radar charts.
* **365-Day Activity Heatmap**: An interactive, GitHub-style contribution heatmap tracking your daily consistency. Click any day to time-travel and review completed tasks and past daily reflections.
* **AI Productivity Insights**: Get intelligent, contextual productivity advice powered by AI, evaluating your routines and task completion arrays.
* **Complete Data Ownership**: All data lives locally in your browser. Easily export (backup as JSON) and import your settings, plans, and task history.
* **Adaptive Theming**: Fully responsive UI with multiple gorgeous color palettes (Tokyo Night, Dracula, Monokai, etc.) and seamless dark mode support.

## 🚀 Getting Started

### Installation

1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

### Quick Usage Guide

1. **Configure Your Plan**: Head to the Settings modal and set up your **Program Configuration**. Define your Start Date, Duration, customized Routines, and the Subjects you want to conquer.
2. **Edit Your Day**: Click "Edit Day" on the top right of your dashboard to drag and drop tasks into different groups, add ad-hoc focus blocks, or specifically overwrite today's agenda.
3. **Focus Up**: Hit the "Play" icon on any upcoming task to launch the timer. Toggle **Zen Mode** (Maximize icon) or the **Mini-Player** (Minimize icon on the header) for your preferred work environment.
4. **Review & Grow**: Visit the **Performance Analytics** tab to view your Skill Trees, Heatmap, and level up!

## 🛠️ Tech Stack

* **Framework**: React 18 (Vite) + TypeScript
* **Styling**: Tailwind CSS for highly responsive, utility-first UI styling.
* **Animations**: Framer Motion (`motion/react`) for fluid layout transitions and element micro-interactions.
* **Data Visualization**: Chart.js (`react-chartjs-2`) for Radar, Line, and Doughnut charts.
* **Icons**: `lucide-react`
