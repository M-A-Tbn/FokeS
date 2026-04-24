import { ThemeType, UserSettings } from './types';

export const THEMES: Record<ThemeType, Record<string, string>> = {
  pumpy: {
    '--brand-50': '#F5EBE0',  // Warm cream neo-brutalist bg
    '--brand-100': '#F5C53B', // Highlight/accent yellow
    '--brand-500': '#E8523A', // Primary red
    '--brand-600': '#2B6CB0', // Primary blue
    '--brand-900': '#151515', // Dark borders/text core
    '--sub1': '#F5C53B',      // Solid yellow
    '--sub2': '#4E4E4E',      // Dark gray
    '--sub3': '#B8B8B8',      // Soft gray
  },
  autumn: {
    '--brand-50': '#FFF6E6', // Light beige/orange background
    '--brand-100': '#FFE8C2', // Soft orange border/highlight
    '--brand-500': '#FAAC41', // Main Modjoul orange
    '--brand-600': '#E69733', // Darker Modjoul orange
    '--brand-900': '#3A635B', // Modjoul dark teal green background
    '--sub1': '#7BA59D',      // Lighter teal
    '--sub2': '#4E4E4E',      // Dark text gray
    '--sub3': '#A1A1A1',      // Muted text/lines
  },
  cyberpunk: {
    '--brand-50': '#fdf4ff',
    '--brand-100': '#fae8ff',
    '--brand-500': '#d946ef',
    '--brand-600': '#a21caf',
    '--brand-900': '#0f172a',
    '--sub1': '#06b6d4',
    '--sub2': '#facc15',
    '--sub3': '#10b981',
  },
  dracula: {
    '--brand-50': '#f8f8f2',
    '--brand-100': '#e6e6e6',
    '--brand-500': '#bd93f9',
    '--brand-600': '#ff79c6',
    '--brand-900': '#282a36',
    '--sub1': '#50fa7b',
    '--sub2': '#ffb86c',
    '--sub3': '#8be9fd',
  },
  nord: {
    '--brand-50': '#eceff4',
    '--brand-100': '#e5e9f0',
    '--brand-500': '#5e81ac',
    '--brand-600': '#88c0d0',
    '--brand-900': '#2e3440',
    '--sub1': '#bf616a',
    '--sub2': '#a3be8c',
    '--sub3': '#ebcb8b',
  },
  monochrome: {
    '--brand-50': '#f9fafb',
    '--brand-100': '#f3f4f6',
    '--brand-500': '#6b7280',
    '--brand-600': '#4b5563',
    '--brand-900': '#111827',
    '--sub1': '#374151',
    '--sub2': '#1f2937',
    '--sub3': '#030712',
  },
  synthwave: {
    '--brand-50': '#fce7f3',
    '--brand-100': '#fbcfe8',
    '--brand-500': '#ec4899',
    '--brand-600': '#be185d',
    '--brand-900': '#2e1065',
    '--sub1': '#3b82f6',
    '--sub2': '#8b5cf6',
    '--sub3': '#f43f5e',
  },
  cafe: {
    '--brand-50': '#fdf8f6',
    '--brand-100': '#f2e8e5',
    '--brand-500': '#a0522d',
    '--brand-600': '#8b4513',
    '--brand-900': '#3e2723',
    '--sub1': '#cd853f',
    '--sub2': '#6b4226',
    '--sub3': '#2c1e16',
  },
  tokyo_night: {
    '--brand-50': '#e1e2e7',
    '--brand-100': '#c0caf5',
    '--brand-500': '#7aa2f7',
    '--brand-600': '#bb9af7',
    '--brand-900': '#1a1b26',
    '--sub1': '#9ece6a',
    '--sub2': '#e0af68',
    '--sub3': '#f7768e',
  },
  monokai: {
    '--brand-50': '#fdf9f3',
    '--brand-100': '#f3eee5',
    '--brand-500': '#fd971f',
    '--brand-600': '#f92672',
    '--brand-900': '#272822',
    '--sub1': '#a6e22e',
    '--sub2': '#66d9ef',
    '--sub3': '#ae81ff',
  },
  gruvbox: {
    '--brand-50': '#fbf1c7',
    '--brand-100': '#ebdbb2',
    '--brand-500': '#d79921',
    '--brand-600': '#cc241d',
    '--brand-900': '#282828',
    '--sub1': '#98971a',
    '--sub2': '#458588',
    '--sub3': '#b16286',
  },
  github_theme: {
    '--brand-50': '#ffffff',
    '--brand-100': '#f6f8fa',
    '--brand-500': '#0969da',
    '--brand-600': '#2da44e',
    '--brand-900': '#0d1117',
    '--sub1': '#bf3989',
    '--sub2': '#e34c26',
    '--sub3': '#6e7681',
  },
  one_dark: {
    '--brand-50': '#fafafa',
    '--brand-100': '#f0f0f0',
    '--brand-500': '#61afef',
    '--brand-600': '#c678dd',
    '--brand-900': '#282c34',
    '--sub1': '#98c379',
    '--sub2': '#e5c07b',
    '--sub3': '#e06c75',
  },
};

export const RANKS = [
  { threshold: 0, name: 'Novice', color: 'text-slate-500' },
  { threshold: 1000, name: 'Scholar', color: 'text-blue-500' },
  { threshold: 5000, name: 'Executive', color: 'text-emerald-500' },
  { threshold: 10000, name: 'Master', color: 'text-purple-500' },
  { threshold: 25000, name: 'Grandmaster', color: 'text-amber-500' },
];

export const BADGES = [
  { id: 'first_step', name: 'First Step', description: 'Complete your first task', icon: 'CheckCircle', color: 'text-emerald-500' },
  { id: 'streak_3', name: 'Momentum', description: 'Achieve a 3-day streak', icon: 'Flame', color: 'text-orange-500' },
  { id: 'streak_7', name: 'Iron Focus', description: 'Achieve a 7-day streak', icon: 'Flame', color: 'text-rose-500' },
  { id: 'hours_10', name: 'Dedicated', description: 'Log 10 total hours', icon: 'Activity', color: 'text-blue-500' },
  { id: 'hours_50', name: 'Deep Diver', description: 'Log 50 total hours', icon: 'BrainCircuit', color: 'text-purple-500' },
  { id: 'golden_day', name: 'Golden Day', description: 'Complete all daily tasks', icon: 'Sun', color: 'text-amber-500' },
  { id: 'night_owl', name: 'Night Owl', description: 'Log hours past midnight', icon: 'Moon', color: 'text-indigo-400' },
  { id: 'early_bird', name: 'Early Bird', description: 'Start before 6 AM', icon: 'Sunrise', color: 'text-orange-400' },
  { id: 'weekend_warrior', name: 'Weekend Warrior', description: 'Complete a Saturday/Sunday session', icon: 'CalendarDays', color: 'text-teal-500' },
  { id: 'perfectionist', name: 'Perfectionist', description: '100% completion 3 days in a row', icon: 'Sparkles', color: 'text-yellow-400' },
  { id: 'marathon', name: 'Marathon', description: 'A 4+ hour single session', icon: 'Zap', color: 'text-red-500' },
  { id: 'laser_focus', name: 'Laser Focus', description: 'Zero breaks skipped', icon: 'Target', color: 'text-red-600' },
  { id: 'unstoppable', name: 'Unstoppable', description: 'Achieve a 30-day streak', icon: 'Rocket', color: 'text-purple-600' },
  { id: 'master_planner', name: 'Master Planner', description: 'Clear out entire backlog', icon: 'ListTodo', color: 'text-blue-400' },
  { id: 'thinker', name: 'Thinker', description: 'Log 5 daily reflections', icon: 'Lightbulb', color: 'text-amber-300' },
  { id: 'zenith', name: 'Zenith', description: 'Reach Grandmaster rank', icon: 'Mountain', color: 'text-teal-600' },
  { id: 'shield', name: 'Shield of Discipline', description: 'Log a session on an off-day', icon: 'Shield', color: 'text-slate-500' },
  { id: 'voyager', name: 'Voyager', description: 'Use the app for an entire year', icon: 'Compass', color: 'text-amber-700' },
  { id: 'crown', name: 'Monarch', description: 'Cross 1,000 Total Hours', icon: 'Crown', color: 'text-yellow-500' },
  { id: 'caffeine', name: 'Caffeine Driven', description: 'Log a session under 30m', icon: 'Coffee', color: 'text-stone-600' },
  { id: 'music_lover', name: 'In The Zone', description: 'Use ambient noise 10 times', icon: 'Music', color: 'text-pink-500' },
  { id: 'hours_100', name: '100 Hours Club', description: 'Log 100 total hours', icon: 'Trophy', color: 'text-yellow-600' },
  { id: 'hours_500', name: '500 Hours Club', description: 'Log 500 total hours', icon: 'Star', color: 'text-blue-600' },
  { id: 'coder', name: 'Hacker', description: 'Use a coding subject', icon: 'Terminal', color: 'text-emerald-400' },
  { id: 'bookworm', name: 'Bookworm', description: 'Use a reading subject', icon: 'BookOpen', color: 'text-orange-300' },
  { id: 'consistent', name: 'Mechanic', description: 'Never miss an evening review', icon: 'Settings2', color: 'text-slate-400' }
];

const today = new Date().toISOString().split('T')[0];
const currentYM = today.substring(0, 7);

export const INITIAL_SETTINGS: UserSettings = {
  startDate: today,
  duration: 120,
  xp: 0,
  theme: 'pumpy',
  isDarkMode: false,
  unlockedBadges: [],
  backlog: [],
  timerSoundEnabled: true,
  dailyOverrides: {},
  plans: [{
    id: `plan-${Date.now()}`,
    name: 'Foundation Plan',
    startDate: today,
    durationDays: 30,
    subjects: [
      { id: 'S1', title: 'Subject Alpha', targetHours: 2.5, blockDuration: 30, breakDuration: 10, startTime: '07:00' },
      { id: 'S2', title: 'Subject Beta', targetHours: 2.5, blockDuration: 30, breakDuration: 10, startTime: '12:00' },
      { id: 'S3', title: 'Subject Gamma', targetHours: 2.5, blockDuration: 30, breakDuration: 10, startTime: '17:00' },
    ],
    morningRoutine: [
      { id: 'M1', title: 'Wake & Hydrate', duration: 15 },
      { id: 'M2', title: 'Morning Mobility', duration: 15 },
      { id: 'M3', title: 'Meditation', duration: 15 },
      { id: 'M4', title: 'Nutritious Breakfast', duration: 30 }
    ],
    lifeRoutine: [
      { id: 'L1', title: 'Healthy Lunch & Walk', duration: 60 },
      { id: 'L2', title: 'Physical Training', duration: 60 },
      { id: 'L3', title: 'Admin & Chores', duration: 30 },
      { id: 'L4', title: 'Social / Family', duration: 60 }
    ],
    eveningRoutine: [
      { id: 'F1', title: 'Review & Synthesize', duration: 30 },
      { id: 'F2', title: 'Digital Sunset', duration: 30 },
      { id: 'F3', title: 'Reading / Relax', duration: 30 },
      { id: 'F4', title: '8h Restorative Sleep', duration: 480 }
    ]
  }],
  monthlyConfig: {
    [currentYM]: {
      subjects: [],
      morningRoutine: [],
      lifeRoutine: [],
      eveningRoutine: []
    },
  },
};
