import { Outlet } from 'react-router';

export function OnboardingLayout() {
  return (
    <div className="min-h-screen bg-background">
      <Outlet />
    </div>
  );
}
