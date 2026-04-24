export type ThemeType = 'cyberpunk' | 'dracula' | 'nord' | 'monochrome' | 'synthwave' | 'cafe' | 'tokyo_night' | 'monokai' | 'gruvbox' | 'github_theme' | 'one_dark' | 'autumn' | 'pumpy';

export interface SubjectConfig {
  id: string;
  title: string;
  targetHours: number;
  blockDuration: number;
  breakDuration: number;
  startTime: string;
}

export interface RoutineTask {
  id: string;
  title: string;
  duration: number; // in minutes
}

export interface MonthlyConfig {
  [yearMonth: string]: {
    subjects: SubjectConfig[];
    morningRoutine?: RoutineTask[];
    lifeRoutine?: RoutineTask[];
    eveningRoutine?: RoutineTask[];
  };
}

export interface BacklogItem {
  id: string;
  title: string;
  duration: number; // in minutes
  subjectId?: string;
}

export interface DailyOverride {
  isOffDay?: boolean;
  tasks?: Task[]; // custom tasks replacing the generic template
}

export interface Plan {
  id: string;
  name: string;
  startDate: string;
  durationDays: number;
  subjects: SubjectConfig[];
  morningRoutine: RoutineTask[];
  lifeRoutine: RoutineTask[];
  eveningRoutine: RoutineTask[];
}

export interface UserSettings {
  startDate: string; // legacy, can keep
  duration: number; // legacy, can keep
  xp: number;
  monthlyConfig: MonthlyConfig; // legacy
  plans: Plan[];
  theme: ThemeType;
  isDarkMode: boolean;
  unlockedBadges: string[];
  backlog: BacklogItem[];
  timerSoundEnabled: boolean;
  dailyOverrides?: Record<string, DailyOverride>;
  reflections?: Record<string, string>;
}

export interface Task {
  id: string;
  group: string;
  title: string;
  hours: number;
  subjectId?: string;
}

export interface DailySession {
  id: string;
  title: string;
  subjectId?: string;
  duration: number; // in minutes
}

export interface DailyData {
  [dateKey: string]: string[]; // Array of completed task IDs
}

export interface DiagnosticData {
  [dateKey: string]: string; // Reason for low performance
}
