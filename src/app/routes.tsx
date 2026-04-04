import { createBrowserRouter } from 'react-router';
import { RootLayout } from './layouts/RootLayout';
import { OnboardingLayout } from './layouts/OnboardingLayout';
import { ValueProposition } from './screens/onboarding/ValueProposition';
import { ProfileSetup } from './screens/onboarding/ProfileSetup';
import { GoalSetting } from './screens/onboarding/GoalSetting';
import { SignIn } from './screens/auth/SignIn';
import { SignUp } from './screens/auth/SignUp';
import { Dashboard } from './screens/Dashboard';
import { Tasks } from './screens/Tasks';
import { Focus } from './screens/Focus';
import { Analytics } from './screens/Analytics';
import { Achievements } from './screens/Achievements';
import { Settings } from './screens/Settings';

export const router = createBrowserRouter([
  {
    path: '/auth',
    Component: OnboardingLayout,
    children: [
      { path: 'signin', Component: SignIn },
      { path: 'signup', Component: SignUp },
    ],
  },
  {
    path: '/onboarding',
    Component: OnboardingLayout,
    children: [
      { index: true, Component: ValueProposition },
      { path: 'profile', Component: ProfileSetup },
      { path: 'goals', Component: GoalSetting },
    ],
  },
  {
    path: '/',
    Component: RootLayout,
    children: [
      { index: true, Component: Dashboard },
      { path: 'tasks', Component: Tasks },
      { path: 'focus', Component: Focus },
      { path: 'analytics', Component: Analytics },
      { path: 'achievements', Component: Achievements },
      { path: 'settings', Component: Settings },
    ],
  },
]);
