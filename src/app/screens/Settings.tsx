import { useApp } from '../context/AppContext';
import { Switch } from '../components/ui/switch';
import { Button } from '../components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select';
import { Label } from '../components/ui/label';
import {
  Settings as SettingsIcon,
  User,
  Bell,
  Timer,
  Link as LinkIcon,
  Shield,
  Moon,
  Sun,
  Share2,
  Download,
  Trash2,
} from 'lucide-react';

export function Settings() {
  const { user, darkMode, toggleDarkMode } = useApp();

  return (
    <div className="min-h-screen bg-background p-6 space-y-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold text-foreground flex items-center gap-2">
        <SettingsIcon className="w-7 h-7" />
        Settings
      </h1>

      <div className="bg-card rounded-2xl p-6 border border-border">
        <div className="flex items-start gap-4 mb-6">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#1E3E5F] to-[#2D6A4F] flex items-center justify-center text-white text-2xl font-bold">
            A
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-bold text-foreground">
              {user?.name || 'Alex Chen'}
            </h2>
            <p className="text-muted-foreground">
              {user?.field || 'Computer Science'}, {user?.year || 'Year 2'}
            </p>
            <p className="text-sm text-muted-foreground">
              Member since{' '}
              {user?.joinDate
                ? new Date(user.joinDate).toLocaleDateString('en-US', {
                    month: 'long',
                    year: 'numeric',
                  })
                : 'January 2026'}
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <User className="w-4 h-4 mr-2" />
            Edit Profile
          </Button>
          <Button variant="outline" size="sm">
            View Public Profile
          </Button>
          <Button variant="outline" size="sm">
            <Share2 className="w-4 h-4" />
          </Button>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-foreground">PREFERENCES</h2>
        <div className="bg-card rounded-2xl p-6 border border-border space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {darkMode ? (
                <Moon className="w-5 h-5 text-[#9C89B8]" />
              ) : (
                <Sun className="w-5 h-5 text-[#E9B35F]" />
              )}
              <div>
                <Label className="text-base">Dark Mode</Label>
                <p className="text-sm text-muted-foreground">
                  Use dark theme across the app
                </p>
              </div>
            </div>
            <Switch checked={darkMode} onCheckedChange={toggleDarkMode} />
          </div>

          <div className="h-px bg-border" />

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Bell className="w-5 h-5 text-[#1E3E5F]" />
              <div>
                <Label className="text-base">Smart Notifications</Label>
                <p className="text-sm text-muted-foreground">
                  AI-powered contextual reminders
                </p>
              </div>
            </div>
            <Switch defaultChecked />
          </div>

          <div className="h-px bg-border" />

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Bell className="w-5 h-5 text-[#1E3E5F]" />
              <div>
                <Label className="text-base">Study Reminders</Label>
                <p className="text-sm text-muted-foreground">
                  Daily study session reminders
                </p>
              </div>
            </div>
            <Button variant="outline" size="sm">
              Configure
            </Button>
          </div>

          <div className="h-px bg-border" />

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Timer className="w-5 h-5 text-[#2D6A4F]" />
              <div>
                <Label className="text-base">Focus Mode Auto-Start</Label>
                <p className="text-sm text-muted-foreground">
                  Auto-start focus mode at scheduled times
                </p>
              </div>
            </div>
            <Button variant="outline" size="sm">
              Configure
            </Button>
          </div>

          <div className="h-px bg-border" />

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Bell className="w-5 h-5 text-[#1E3E5F]" />
              <div>
                <Label className="text-base">Weekly Summary Email</Label>
                <p className="text-sm text-muted-foreground">
                  Receive weekly progress reports
                </p>
              </div>
            </div>
            <Switch defaultChecked />
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-foreground">STUDY SETTINGS</h2>
        <div className="bg-card rounded-2xl p-6 border border-border space-y-4">
          <div className="flex items-center justify-between">
            <Label className="text-base">Pomodoro Duration</Label>
            <Select defaultValue="25">
              <SelectTrigger className="w-32">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="15">15 min</SelectItem>
                <SelectItem value="25">25 min</SelectItem>
                <SelectItem value="30">30 min</SelectItem>
                <SelectItem value="45">45 min</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="h-px bg-border" />

          <div className="flex items-center justify-between">
            <Label className="text-base">Short Break Duration</Label>
            <Select defaultValue="5">
              <SelectTrigger className="w-32">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="3">3 min</SelectItem>
                <SelectItem value="5">5 min</SelectItem>
                <SelectItem value="10">10 min</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="h-px bg-border" />

          <div className="flex items-center justify-between">
            <Label className="text-base">Long Break Duration</Label>
            <Select defaultValue="15">
              <SelectTrigger className="w-32">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="15">15 min</SelectItem>
                <SelectItem value="20">20 min</SelectItem>
                <SelectItem value="30">30 min</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="h-px bg-border" />

          <div className="flex items-center justify-between">
            <Label className="text-base">Daily Study Goal</Label>
            <Select defaultValue="2">
              <SelectTrigger className="w-32">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1 hour</SelectItem>
                <SelectItem value="2">2 hours</SelectItem>
                <SelectItem value="3">3 hours</SelectItem>
                <SelectItem value="4">4 hours</SelectItem>
                <SelectItem value="5">5 hours</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="h-px bg-border" />

          <div className="flex items-center justify-between">
            <Label className="text-base">Weekly Study Goal</Label>
            <Select defaultValue="20">
              <SelectTrigger className="w-32">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="10">10 hours</SelectItem>
                <SelectItem value="15">15 hours</SelectItem>
                <SelectItem value="20">20 hours</SelectItem>
                <SelectItem value="25">25 hours</SelectItem>
                <SelectItem value="30">30 hours</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-foreground">INTEGRATIONS</h2>
        <div className="bg-card rounded-2xl p-6 border border-border space-y-4">
          {[
            { name: 'Google Calendar', icon: LinkIcon, connected: false },
            { name: 'Microsoft Outlook', icon: LinkIcon, connected: false },
            { name: 'Apple Calendar', icon: LinkIcon, connected: false },
            { name: 'Blackboard Sync', icon: LinkIcon, connected: false },
          ].map((integration, index) => (
            <div key={index}>
              {index > 0 && <div className="h-px bg-border mb-4" />}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <integration.icon className="w-5 h-5 text-muted-foreground" />
                  <Label className="text-base">{integration.name}</Label>
                </div>
                <Button
                  variant={integration.connected ? 'default' : 'outline'}
                  size="sm"
                >
                  {integration.connected ? 'Connected' : 'Connect'}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-foreground">
          NOTIFICATION PREFERENCES
        </h2>
        <div className="bg-card rounded-2xl p-6 border border-border space-y-4">
          <div className="flex items-center justify-between">
            <Label className="text-base">Deadline Reminders</Label>
            <Select defaultValue="24h">
              <SelectTrigger className="w-40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1h">1h before</SelectItem>
                <SelectItem value="3h">3h before</SelectItem>
                <SelectItem value="24h">24h before</SelectItem>
                <SelectItem value="48h">48h before</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="h-px bg-border" />

          <div className="flex items-center justify-between">
            <Label className="text-base">Study Reminders</Label>
            <Button variant="outline" size="sm">
              Custom
            </Button>
          </div>

          <div className="h-px bg-border" />

          <div className="flex items-center justify-between">
            <Label className="text-base">Achievement Notifications</Label>
            <Switch defaultChecked />
          </div>

          <div className="h-px bg-border" />

          <div className="flex items-center justify-between">
            <Label className="text-base">Motivational Quotes</Label>
            <Switch defaultChecked />
          </div>

          <div className="h-px bg-border" />

          <div className="flex items-center justify-between">
            <Label className="text-base">Weekly Reports</Label>
            <Switch defaultChecked />
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-foreground flex items-center gap-2">
          <Shield className="w-5 h-5" />
          DATA & PRIVACY
        </h2>
        <div className="bg-card rounded-2xl p-6 border border-border space-y-4">
          <Button variant="outline" className="w-full justify-start">
            <Download className="w-4 h-4 mr-2" />
            Export All Data
          </Button>

          <div className="h-px bg-border" />

          <button className="w-full text-left text-sm text-muted-foreground hover:text-foreground transition-colors">
            Privacy Policy
          </button>

          <div className="h-px bg-border" />

          <button className="w-full text-left text-sm text-muted-foreground hover:text-foreground transition-colors">
            Terms of Service
          </button>

          <div className="h-px bg-border" />

          <Button
            variant="destructive"
            className="w-full justify-start"
            size="sm"
          >
            <Trash2 className="w-4 h-4 mr-2" />
            Delete Account
          </Button>
        </div>
      </div>

      <div className="text-center text-sm text-muted-foreground pb-6">
        <p>AcaDemia v1.0.0</p>
        <p className="mt-1">© 2026 All rights reserved</p>
      </div>
    </div>
  );
}
