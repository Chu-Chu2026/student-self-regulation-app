import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

export interface Module {
  id: string;
  name: string;
  code: string;
  color: string;
  progress: number;
  creditHours: number;
  grade?: number;
  timeSpent: number;
}

export interface Task {
  id: string;
  title: string;
  moduleId: string;
  dueDate: Date;
  priority: 'high' | 'medium' | 'low';
  status: 'pending' | 'in_progress' | 'completed' | 'overdue';
  progress: number;
  subtasks: Subtask[];
  timeEstimate: number;
  description?: string;
}

export interface Subtask {
  id: string;
  title: string;
  completed: boolean;
}

export interface FocusSession {
  id: string;
  taskId: string;
  duration: number;
  type: 'deep' | 'pomodoro' | 'study';
  startTime: Date;
  endTime?: Date;
  completedAt?: Date;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  unlocked: boolean;
  unlockedAt?: Date;
  progress?: number;
  target?: number;
}

export interface UserProfile {
  name: string;
  academicLevel: 'undergraduate' | 'postgraduate' | 'phd';
  year: string;
  field: string;
  joinDate: Date;
  primaryGoal: string;
  avatar?: string;
}

interface AppContextType {
  user: UserProfile | null;
  setUser: (user: UserProfile) => void;
  modules: Module[];
  addModule: (module: Module) => void;
  updateModule: (id: string, updates: Partial<Module>) => void;
  tasks: Task[];
  addTask: (task: Task) => void;
  updateTask: (id: string, updates: Partial<Task>) => void;
  deleteTask: (id: string) => void;
  completeTask: (id: string) => void;
  focusSessions: FocusSession[];
  addFocusSession: (session: FocusSession) => void;
  completeFocusSession: (id: string) => void;
  studyStreak: number;
  totalStudyTime: number;
  completionRate: number;
  xp: number;
  level: number;
  addXP: (amount: number) => void;
  achievements: Achievement[];
  unlockAchievement: (id: string) => void;
  onboardingCompleted: boolean;
  completeOnboarding: () => void;
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [modules, setModules] = useState<Module[]>([
    {
      id: '1',
      name: 'Literature',
      code: 'ENGL4001',
      color: '#E76F51',
      progress: 68,
      creditHours: 20,
      grade: 78,
      timeSpent: 32,
    },
    {
      id: '2',
      name: 'Research',
      code: 'RES5002',
      color: '#2D6A4F',
      progress: 45,
      creditHours: 20,
      grade: 71,
      timeSpent: 28,
    },
    {
      id: '3',
      name: 'Business',
      code: 'BUS3001',
      color: '#1E3E5F',
      progress: 92,
      creditHours: 15,
      grade: 85,
      timeSpent: 22,
    },
  ]);

  const [tasks, setTasks] = useState<Task[]>([
    {
      id: '1',
      title: 'Complete Research Methods Quiz',
      moduleId: '2',
      dueDate: new Date(2026, 2, 31),
      priority: 'high',
      status: 'in_progress',
      progress: 60,
      subtasks: [
        { id: '1-1', title: 'Find sources', completed: false },
        { id: '1-2', title: 'Read', completed: false },
        { id: '1-3', title: 'Synthesize', completed: true },
        { id: '1-4', title: 'Draft outline', completed: false },
        { id: '1-5', title: 'Write', completed: false },
      ],
      timeEstimate: 120,
    },
    {
      id: '2',
      title: 'Literature Review Draft',
      moduleId: '1',
      dueDate: new Date(2026, 2, 30, 23, 59),
      priority: 'high',
      status: 'in_progress',
      progress: 75,
      subtasks: [],
      timeEstimate: 240,
    },
    {
      id: '3',
      title: 'Annotated Bibliography',
      moduleId: '1',
      dueDate: new Date(2026, 2, 28),
      priority: 'high',
      status: 'overdue',
      progress: 50,
      subtasks: [],
      timeEstimate: 180,
    },
    {
      id: '4',
      title: 'Peer Review Responses',
      moduleId: '1',
      dueDate: new Date(2026, 2, 30),
      priority: 'medium',
      status: 'pending',
      progress: 0,
      subtasks: [],
      timeEstimate: 60,
    },
    {
      id: '5',
      title: 'Ethics Approval Form',
      moduleId: '2',
      dueDate: new Date(2026, 3, 1),
      priority: 'high',
      status: 'pending',
      progress: 66,
      subtasks: [],
      timeEstimate: 90,
    },
    {
      id: '6',
      title: 'Group Project Submission',
      moduleId: '3',
      dueDate: new Date(2026, 3, 2),
      priority: 'high',
      status: 'in_progress',
      progress: 40,
      subtasks: [],
      timeEstimate: 300,
    },
  ]);

  const [focusSessions, setFocusSessions] = useState<FocusSession[]>([]);
  const [studyStreak, setStudyStreak] = useState(21);
  const [totalStudyTime, setTotalStudyTime] = useState(12.5);
  const [xp, setXp] = useState(1247);
  const [level, setLevel] = useState(8);
  const [onboardingCompleted, setOnboardingCompleted] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const [achievements, setAchievements] = useState<Achievement[]>([
    {
      id: '1',
      title: '21-Day Streak',
      description: 'Studied for 21 consecutive days',
      icon: '🔥',
      unlocked: true,
      unlockedAt: new Date(2026, 2, 15),
    },
    {
      id: '2',
      title: 'Early Bird',
      description: 'Completed 10 morning study sessions',
      icon: '🌙',
      unlocked: true,
      unlockedAt: new Date(2026, 2, 10),
    },
    {
      id: '3',
      title: '100 Tasks Completed',
      description: 'Complete 100 tasks',
      icon: '📚',
      unlocked: true,
      unlockedAt: new Date(2026, 2, 20),
    },
    {
      id: '4',
      title: 'Focus Master',
      description: 'Complete 50 hours of focus sessions',
      icon: '⏱️',
      unlocked: false,
      progress: 35,
      target: 50,
    },
    {
      id: '5',
      title: 'Goal Crusher',
      description: 'Complete 5 major goals',
      icon: '🎯',
      unlocked: false,
      progress: 3,
      target: 5,
    },
    {
      id: '6',
      title: 'Peer Helper',
      description: 'Help 10 classmates with peer reviews',
      icon: '🤝',
      unlocked: false,
      progress: 3,
      target: 10,
    },
  ]);

  const completionRate = Math.round(
    (tasks.filter((t) => t.status === 'completed').length / tasks.length) * 100
  );

  const addModule = (module: Module) => {
    setModules([...modules, module]);
  };

  const updateModule = (id: string, updates: Partial<Module>) => {
    setModules(modules.map((m) => (m.id === id ? { ...m, ...updates } : m)));
  };

  const addTask = (task: Task) => {
    setTasks([...tasks, task]);
  };

  const updateTask = (id: string, updates: Partial<Task>) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, ...updates } : t)));
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const completeTask = (id: string) => {
    updateTask(id, { status: 'completed', progress: 100 });
    addXP(30);
  };

  const addFocusSession = (session: FocusSession) => {
    setFocusSessions([...focusSessions, session]);
  };

  const completeFocusSession = (id: string) => {
    const session = focusSessions.find((s) => s.id === id);
    if (session) {
      const updatedSession = { ...session, completedAt: new Date() };
      setFocusSessions(
        focusSessions.map((s) => (s.id === id ? updatedSession : s))
      );
      addXP(50);
      setTotalStudyTime((prev) => prev + session.duration / 60);
    }
  };

  const addXP = (amount: number) => {
    const newXP = xp + amount;
    setXp(newXP);

    if (newXP >= 2500 * level) {
      setLevel(level + 1);
    }
  };

  const unlockAchievement = (id: string) => {
    setAchievements(
      achievements.map((a) =>
        a.id === id ? { ...a, unlocked: true, unlockedAt: new Date() } : a
      )
    );
    addXP(100);
  };

  const completeOnboarding = () => {
    setOnboardingCompleted(true);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
        modules,
        addModule,
        updateModule,
        tasks,
        addTask,
        updateTask,
        deleteTask,
        completeTask,
        focusSessions,
        addFocusSession,
        completeFocusSession,
        studyStreak,
        totalStudyTime,
        completionRate,
        xp,
        level,
        addXP,
        achievements,
        unlockAchievement,
        onboardingCompleted,
        completeOnboarding,
        darkMode,
        toggleDarkMode,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}
