import { Outlet } from 'react-router';
import { BottomNav } from '../components/BottomNav';

export function RootLayout() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <main className="flex-1 overflow-auto pb-20">
        <Outlet />
      </main>
      <BottomNav />
    </div>
  );
}
