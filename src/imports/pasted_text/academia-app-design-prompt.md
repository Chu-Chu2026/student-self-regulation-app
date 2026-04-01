# 🎨 **PROFESSIONAL FIGMA MAKE AI PROMPT - Premium Academic App Design**

**App Name:** **AcaDemia** (or "StudyMaster Pro")

---

## EXECUTIVE PROMPT

Copy and paste this premium, highly detailed prompt into Figma Make AI:

---

```
Design a premium, enterprise-grade mobile application called "AcaDemia" – an intelligent academic self-regulation platform for university students. This app combines behavioral science, habit formation psychology, and modern UX principles to help students master their academic journey.

---

## STRATEGIC DESIGN PHILOSOPHY

This app is designed for serious students who want to transform their academic performance. The design balances sophistication with approachability, using evidence-based design patterns from leading educational technology platforms (Duolingo, Notion, Forest, and Headspace) while maintaining a unique identity.

---

## COMPLETE COLOR SYSTEM

**Primary Palette (Professional & Calming):**
- Primary: #1E3E5F (Deep Navy) – main actions, headers, important UI elements
- Primary Light: #2C4C6E – hover states, secondary buttons
- Primary Dark: #0A2A44 – active states, deep focus mode

**Secondary Palette (Growth & Progress):**
- Secondary: #2D6A4F (Forest Green) – success states, completion, positive reinforcement
- Secondary Light: #40916C – progress indicators, achievements
- Secondary Dark: #1B4D3E – deep success states

**Accent Palette (Energy & Alerts):**
- Accent 1: #E9B35F (Warm Amber) – highlights, important notifications
- Accent 2: #E76F51 (Terracotta) – urgent deadlines, warnings
- Accent 3: #9C89B8 (Lavender) – special features, premium elements

**Neutral Palette (Sophisticated Foundation):**
- Background: #F5F7FA (Off-White) – main background
- Surface: #FFFFFF (Pure White) – cards, modals, elevated elements
- Surface Alt: #F8F9FC – alternate backgrounds
- Text Primary: #1A2C3E (Dark Navy) – headings, important text
- Text Secondary: #5C6F87 (Slate Grey) – body text, labels
- Text Tertiary: #8E9DAE – helper text, placeholders
- Border: #E4E7EC – dividers, borders
- Overlay: rgba(0,0,0,0.5) – modals, backdrops

**Feedback Colors:**
- Success: #2D6A4F (Green)
- Warning: #E9B35F (Amber)
- Error: #E76F51 (Terracotta)
- Info: #5E9B9C (Teal)

**Dark Mode Palette:**
- Background: #121826 (Rich Black)
- Surface: #1E293B (Slate)
- Text Primary: #F1F5F9 (Off-White)
- Text Secondary: #94A3B8 (Light Slate)
- Border: #334155 (Dark Border)

---

## TYPOGRAPHY SYSTEM

**Font Family:** SF Pro Text / Inter (iOS) or Roboto (Android) – system fonts for optimal performance

**Type Scale:**
- Display Large (Hero): 34pt / 41pt line height – SF Pro Display Bold
- Display Small (Headlines): 28pt / 34pt line height – SF Pro Display SemiBold
- Title Large: 22pt / 28pt line height – SF Pro Text Medium
- Title Small: 18pt / 24pt line height – SF Pro Text Medium
- Body Large: 16pt / 24pt line height – SF Pro Text Regular
- Body: 14pt / 20pt line height – SF Pro Text Regular
- Caption: 12pt / 16pt line height – SF Pro Text Regular
- Button: 16pt / 24pt line height – SF Pro Text Medium

---

## DESIGN SYSTEM COMPONENTS

### 1. Cards & Containers
- **Standard Card:** 16px radius, 1px border (#E4E7EC), shadow: 0 2px 8px rgba(0,0,0,0.04)
- **Elevated Card:** 20px radius, shadow: 0 8px 24px rgba(0,0,0,0.08)
- **Gradient Card:** Linear gradient from Primary Light to Secondary Light, white text
- **Interactive Card:** Hover/active states with scale transform (0.98)

### 2. Buttons
- **Primary Button:** Fill Primary, 48px height, 16px radius, 14px padding horizontal, bold text
- **Secondary Button:** Outline Primary, 48px height, 16px radius, 1px stroke
- **Text Button:** No background, Primary text, 40px height
- **Icon Button:** 44x44px circular, hover background
- **Floating Action Button:** 56x56px circular, Primary fill, shadow elevation 4

### 3. Input Fields
- Height: 52px
- Border: 1px solid #E4E7EC
- Border Radius: 12px
- Padding: 16px
- Focus State: Border Primary + shadow: 0 0 0 2px rgba(30,62,95,0.1)
- Error State: Border Error + error message below

### 4. Progress Indicators
- **Circular:** 2px stroke, gap size 4px, animated on load
- **Linear:** 4px height, rounded caps, gradient fill
- **Streak Indicator:** Fire icon + number, pulsing animation on new streak

### 5. Badges & Chips
- **Module Chips:** 32px height, 20px radius, color-coded by module
- **Priority Badges:** High (Terracotta), Medium (Amber), Low (Green)
- **Status Badges:** Completed (Green), In Progress (Primary), Overdue (Error)

---

## SCREEN 1: INTELLIGENT ONBOARDING FLOW

### Screen 1A: Value Proposition
```
Layout: Split screen with animated illustration
Left (60%): Animated illustration of student with glowing progress rings
Right (40%): Content

Headline: "Master Your Academic Journey"
Subhead: "Join 10,000+ students who've transformed their study habits with intelligent insights and personalized planning."

Feature Grid (2x2):
┌─────────────────────┬─────────────────────┐
│ 📊 Smart Analytics  │ ⏱️ Focus Sessions    │
│ Visualize progress  │ Pomodoro + AI timer  │
├─────────────────────┼─────────────────────┤
│ 🎯 Goal Setting     │ 🔔 Smart Reminders   │
│ AI-powered planning │ Context-aware alerts │
└─────────────────────┴─────────────────────┘

CTA: "Start Free Trial" (Primary Button)
Secondary: "Already have an account? Sign In"
```

### Screen 1B: Academic Profile Setup
```
Question: "What's your academic journey?"

Card Options (3-column grid):
┌─────────────┬─────────────┬─────────────┐
│ Undergraduate│ Postgraduate│ PhD/Research│
│ Year 1-4    │ Masters     │ Doctoral    │
└─────────────┴─────────────┴─────────────┘

Question: "Select your modules/courses"

Module Cards with color picker:
- Module Name + Code
- Credit Hours
- Color selector (for visual organization)
- "Add Module" button
- Minimum 1 module, maximum 8

Question: "What's your primary goal this semester?"
5 Options with icons and descriptions:
1. 🎯 "Achieve First Class Honours"
2. 📈 "Improve Grade by One Category"
3. ⏰ "Stop Procrastinating Completely"
4. 💪 "Build Consistent Study Habits"
5. ⚖️ "Balance Academic & Personal Life"
```

### Screen 1C: AI Goal Setting
```
"Let's set your first goal" (Personalized based on previous selection)

Goal Card Example:
🎯 "Complete Literature Review"
   Sub-goal 1: "Find 15 sources" (checkbox)
   Sub-goal 2: "Read and annotate" (checkbox)
   Sub-goal 3: "Write synthesis" (checkbox)
   Timeline: March 15 - March 30
   [Edit] [Set Reminders]

"Create Another Goal" button
"Start My Journey" (Primary, prominent)

Progress bar: 1/3 setup complete
```

---

## SCREEN 2: COMMAND CENTER DASHBOARD

### Header Section
```
┌─────────────────────────────────────────────────────┐
│ Good morning, Alex                                  │
│ "Consistency is more important than intensity."     │
│                                    ┌───┐ ┌────────┐ │
│                                    │☀️ │ │ 🔔 3  │ │
│                                    └───┘ └────────┘ │
└─────────────────────────────────────────────────────┘
```

### Focus Zone (Hero Section)
```
┌─────────────────────────────────────────────────────┐
│  TODAY'S PRIORITY                    [Focus Mode]  │
│  ════════════════                                   │
│                                                     │
│  📚 Complete Research Methods Quiz                  │
│  RES5002 • Due Tomorrow • 85% of class has done    │
│                                                     │
│  ┌─────────────────────────────────────────────┐   │
│  │ ████████████████████░░░░░░  3/5 steps      │   │
│  │ □ Find sources   □ Read   ☑ Synthesize     │   │
│  │ ☐ Draft outline  ☐ Write                   │   │
│  └─────────────────────────────────────────────┘   │
│                                                     │
│  [Start Focus Session]  [Break Down Task]          │
└─────────────────────────────────────────────────────┘
```

### Live Metrics Cards (3-column grid)
```
┌─────────────────┬─────────────────┬─────────────────┐
│ 🔥 STUDY STREAK │ ⏱️ THIS WEEK   │ ✅ COMPLETION  │
│                 │                 │                 │
│     21 days     │    12.5 hours   │      82%       │
│  +2 from last   │  +3 from last  │   +5% from     │
│     week        │      week      │   last week    │
│  Best: 47 days  │  Goal: 20 hrs  │  Goal: 90%     │
└─────────────────┴─────────────────┴─────────────────┘
```

### Upcoming Deadlines Timeline
```
🎯 UPCOMING DEADLINES

Today, March 30
┌─────────────────────────────────────────────────────┐
│ ⚠️ URGENT                                          │
│ Literature Review Draft      ENGL4001    ██████░░  │
│ 2 hours left                Due 11:59 PM            │
│ [Continue] [Extend]                                 │
└─────────────────────────────────────────────────────┘

Tomorrow, March 31
┌─────────────────────────────────────────────────────┐
│ Research Methods Quiz        RES5002                │
│ 15 multiple choice questions • 60 min               │
│ [Prepare] [Set Reminder]                            │
└─────────────────────────────────────────────────────┘

April 2
┌─────────────────────────────────────────────────────┐
│ Group Project Submission     BUS3001                │
│ 40% of final grade • Peer review component          │
│ [Coordinate] [Share Progress]                       │
└─────────────────────────────────────────────────────┘
```

### Module Progress Cards (Horizontal scroll)
```
┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐
│ ENGL4001        │ │ RES5002         │ │ BUS3001         │
│ Literature      │ │ Research        │ │ Business        │
│                 │ │                 │ │                 │
│ 68% complete    │ │ 45% complete    │ │ 92% complete    │
│ ██████░░░░      │ │ ████░░░░░░      │ │ █████████░      │
│ Next: Final     │ │ Next: Ethics    │ │ Next: Final     │
│ Essay (35%)     │ │ Review (25%)    │ │ Presentation    │
│ [Study]         │ │ [Study]         │ │ [Review]        │
└─────────────────┘ └─────────────────┘ └─────────────────┘
```

### AI Insights Card
```
💡 AI INSIGHT
"Based on your patterns, you focus best between 9-11 AM. 
You have 2 tasks that could be completed in tomorrow's 
optimal window. Schedule them now?"

[Schedule] [Dismiss] [Tell Me More]
```

### Recent Activity Feed
```
🔄 RECENT ACTIVITY

✓ Completed "Research Proposal Outline" • 2 hours ago
✓ Maintained 21-day streak! 🔥 • Today
⏱️ 45 min focus session completed • Today
✓ Achieved "Early Bird" badge • Yesterday
📝 Added "Ethics Review" task • Yesterday
```

### Floating Action Button Menu
```
FAB expands to:
- 📝 Quick Task
- 🎯 Set Goal
- ⏱️ Start Focus
- 📊 Log Grade
```

---

## SCREEN 3: INTELLIGENT TASK MANAGEMENT

### Header with Advanced Filters
```
┌─────────────────────────────────────────────────────┐
│ My Tasks                                      [⋮]  │
│                                                     │
│ [All] [Today] [This Week] [Overdue] [My Modules]   │
│                                                     │
│ 🔍 Search tasks, modules, or deadlines...           │
└─────────────────────────────────────────────────────┘
```

### Task Categories with Collapsible Sections

**OVERDUE (2 tasks)**
```
┌─────────────────────────────────────────────────────┐
│ ⚠️ Annotated Bibliography          ENGL4001         │
│    Due: March 28 • -2 days overdue                  │
│    Priority: HIGH                                   │
│    ┌─────────────────────────────────────────────┐  │
│    │ ████████████░░░░░░░░░░  50% (5/10 sources) │  │
│    └─────────────────────────────────────────────┘  │
│    [Reschedule] [Focus Now]                         │
└─────────────────────────────────────────────────────┘
```

**TODAY (4 tasks)**
```
┌─────────────────────────────────────────────────────┐
│ ☐ Final Draft Submission           ENGL4001        │
│   Due Today • 75% of estimated time remaining       │
│   Priority: HIGH                                    │
│   Subtasks: 3/8 completed                           │
│   [Focus Session] [Break Down]                      │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│ ☐ Peer Review Responses            ENGL4001        │
│   Due Today • 3 classmates waiting                  │
│   Priority: MEDIUM                                  │
│   [Review] [Remind]                                 │
└─────────────────────────────────────────────────────┘
```

**THIS WEEK (6 tasks)**
```
┌─────────────────────────────────────────────────────┐
│ ☐ Ethics Approval Form            RES5002          │
│   Due April 1 • 3 days left                         │
│   Priority: HIGH                                    │
│   Required documents: 2/3 uploaded                  │
│   [Upload] [View Requirements]                      │
└─────────────────────────────────────────────────────┘
```

### Smart Task Creation Modal
```
┌─────────────────────────────────────────────────────┐
│          ✨ Create New Task                         │
│  ════════════════════════════════════════════════  │
│                                                     │
│  Task Name                                          │
│  ┌─────────────────────────────────────────────┐   │
│  │ Write Methodology Section                   │   │
│  └─────────────────────────────────────────────┘   │
│                                                     │
│  Module                          Due Date           │
│  ┌─────────────────────┐        ┌────────────────┐ │
│  │ RES5002 ▼           │        │ Apr 15, 2026  │ │
│  └─────────────────────┘        └────────────────┘ │
│                                                     │
│  Priority:  ○ High  ○ Medium  ○ Low                │
│                                                     │
│  Time Estimate                                      │
│  ┌─────────────────────────────────────────────┐   │
│  │ 2 hours 30 minutes                          │   │
│  └─────────────────────────────────────────────┘   │
│                                                     │
│  Subtasks (optional)                               │
│  ┌─────────────────────────────────────────────┐   │
│  │ + Add subtask                               │   │
│  └─────────────────────────────────────────────┘   │
│                                                     │
│  [Cancel]                          [Create Task]   │
└─────────────────────────────────────────────────────┘
```

---

## SCREEN 4: ADVANCED FOCUS STUDIO

### Focus Session Setup
```
┌─────────────────────────────────────────────────────┐
│              🧘 FOCUS STUDIO                        │
│  ════════════════════════════════════════════════  │
│                                                     │
│  Select Task:                                      │
│  ┌─────────────────────────────────────────────┐   │
│  │ Write Methodology Section ▼                 │   │
│  └─────────────────────────────────────────────┘   │
│                                                     │
│  Session Type:                                     │
│  ┌─────────────────────────────────────────────┐   │
│  │ [Deep Focus] [Pomodoro] [Study with Me]    │   │
│  └─────────────────────────────────────────────┘   │
│                                                     │
│  Duration:                                          │
│  ┌─────────────────────────────────────────────┐   │
│  │ 25 min  │  50 min  │  90 min  │  Custom    │   │
│  └─────────────────────────────────────────────┘   │
│                                                     │
│  Environment:                                      │
│  ☐ Lo-Fi Music    ☐ White Noise    ☐ Nature       │
│  ☐ No Sound       ☐ Brown Noise                   │
│                                                     │
│  Focus Mode:                                       │
│  ☑ Block notifications                             │
│  ☑ Block social media apps                         │
│  ☐ Do Not Disturb mode                             │
│                                                     │
│  [Start Session]                                   │
└─────────────────────────────────────────────────────┘
```

### Active Focus Session Screen
```
┌─────────────────────────────────────────────────────┐
│  Focus Mode Active                         [Exit]  │
│  ════════════════════════════════════════════════  │
│                                                     │
│                    ⏱️                               │
│                 ┌─────┐                             │
│                 │ 23:45│                            │
│                 └─────┘                             │
│                                                     │
│              Current Task:                          │
│           "Write Methodology Section"               │
│                                                     │
│         ┌─────────────────────────────┐             │
│         │ ████████████████░░░░░░░░░░ │             │
│         │        45% complete        │             │
│         └─────────────────────────────┘             │
│                                                     │
│  Today's Total Focus: 1 hour 45 minutes             │
│                                                     │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐ │
│  │   ⏸ Pause  │  │   ⏹ Stop   │  │   ✨ Extend │ │
│  └─────────────┘  └─────────────┘  └─────────────┘ │
│                                                     │
│  🎵 Now playing: Lo-Fi Study Beats                  │
│  [Next Track] [Volume]                              │
│                                                     │
│  Quote: "The secret of getting ahead is getting    │
│         started." - Mark Twain                      │
└─────────────────────────────────────────────────────┘
```

### Session Completion Screen
```
┌─────────────────────────────────────────────────────┐
│              🎉 Session Complete!                   │
│  ════════════════════════════════════════════════  │
│                                                     │
│            You focused for 25 minutes!              │
│                                                     │
│  ┌─────────────────────────────────────────────┐   │
│  │  📊 This Session:                           │   │
│  │  • 8 pages written                          │   │
│  │  • 3 sources referenced                     │   │
│  │  • 75% task progress                        │   │
│  └─────────────────────────────────────────────┘   │
│                                                     │
│  🔥 You've completed 12 focus sessions this week!  │
│  🌟 +50 focus points earned                        │
│                                                     │
│  Your study streak: 21 days! 🎯                    │
│                                                     │
│  [Log Progress]    [Start Another]    [Done]       │
│                                                     │
│  ┌─────────────────────────────────────────────┐   │
│  │ 💡 Tip: Take a 5-minute break before your   │   │
│  │    next session to maintain productivity    │   │
│  └─────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────┘
```

---

## SCREEN 5: COMPREHENSIVE ANALYTICS

### Overview Dashboard
```
┌─────────────────────────────────────────────────────┐
│  ANALYTICS                      [March 2026] [▼]   │
│  ════════════════════════════════════════════════  │
│                                                     │
│  📈 PERFORMANCE SNAPSHOT                           │
│  ┌─────────────────────────────────────────────┐   │
│  │                                             │   │
│  │     85%     vs     62%     vs     91%       │   │
│  │   Completion    Class Avg    Consistency    │   │
│  │   Rate                       Score          │   │
│  │   ↑ +12%                     Top 15%        │   │
│  └─────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────┘
```

### Study Time Analytics
```
⏱️ STUDY TIME ANALYSIS
┌─────────────────────────────────────────────────────┐
│                                                     │
│    25h ┤                                        ┌── │
│    20h ┤                              ┌─────────┘   │
│    15h ┤                    ┌─────────┘             │
│    10h ┤          ┌─────────┘                      │
│     5h ┤ ┌────────┘                                │
│     0h └┴────┬────┬────┬────┬────┬────┬────┬────  │
│            M    T    W    T    F    S    S         │
│                                                     │
│  Total: 82 hours this month • +15% from last month │
│  Daily average: 2.7 hours                          │
│  Most productive: Wednesdays (4.2 hours avg)       │
└─────────────────────────────────────────────────────┘
```

### Module Performance Matrix
```
📚 MODULE BREAKDOWN
┌─────────────────────────────────────────────────────┐
│  Module          Progress   Grade   Time   Status   │
│  ───────────────────────────────────────────────── │
│  ENGL4001        68%        78%     32h    ████░░  │
│  Literature       └─ Next: Final Essay (35%)       │
│                                                     │
│  RES5002         45%        71%     28h    ███░░░  │
│  Research         └─ Next: Ethics Review (25%)     │
│                                                     │
│  BUS3001         92%        85%     22h    ██████  │
│  Business         └─ Next: Final Presentation      │
└─────────────────────────────────────────────────────┘
```

### Habit & Consistency Charts
```
📊 HABIT CONSISTENCY
┌─────────────────────────────────────────────────────┐
│                                                     │
│  Study Streak: 21 days 🔥                          │
│  Best streak: 47 days                               │
│                                                     │
│  Calendar View (March 2026)                        │
│  ┌───┬───┬───┬───┬───┬───┬───┐                     │
│  │ S │ M │ T │ W │ T │ F │ S │                     │
│  ├───┼───┼───┼───┼───┼───┼───┤                     │
│  │ █ │ █ │ █ │ █ │ █ │ █ │ █ │ Week 1             │
│  │ █ │ █ │ █ │ █ │ █ │ █ │ █ │ Week 2             │
│  │ █ │ █ │ █ │ █ │ █ │ ░ │ █ │ Week 3             │
│  │ █ │ █ │ █ │ █ │ █ │ █ │ █ │ Week 4             │
│  └───┴───┴───┴───┴───┴───┴───┘                     │
│  █ = Studied  ░ = Missed  ⬚ = Future              │
└─────────────────────────────────────────────────────┘
```

### Predictive Analytics
```
🤖 AI PREDICTIONS
┌─────────────────────────────────────────────────────┐
│  Based on your current pace:                       │
│                                                     │
│  📊 Projected Semester Grade: 78% (Upper Second)   │
│  🎯 To achieve First Class (70%):                  │
│     Need +2.5 hours/week or +12% on final exam     │
│                                                     │
│  ⚠️ RISK ALERT: ENGL4001 final essay at risk       │
│     Recommendation: Start draft by April 5         │
│                                                     │
│  [View Detailed Forecast] [Adjust Goal]            │
└─────────────────────────────────────────────────────┘
```

---

## SCREEN 6: ACHIEVEMENT & GAMIFICATION

### Badge Collection
```
🏆 ACHIEVEMENTS                    [View All →]
┌─────────────────────────────────────────────────────┐
│  Unlocked (12)          In Progress (8)            │
│                                                     │
│  ┌───────────┐ ┌───────────┐ ┌───────────┐        │
│  │    🔥     │ │    🌙     │ │    📚     │        │
│  │ 21-Day    │ │  Early    │ │ 100 Tasks │        │
│  │  Streak   │ │   Bird    │ │ Completed │        │
│  │  Unlocked │ │  Unlocked │ │  Unlocked │        │
│  │  Mar 15   │ │  Mar 10   │ │  Mar 20   │        │
│  └───────────┘ └───────────┘ └───────────┘        │
│                                                     │
│  ┌───────────┐ ┌───────────┐ ┌───────────┐        │
│  │    ⏱️     │ │    🎯     │ │    🤝     │        │
│  │ Focus     │ │  Goal     │ │  Peer     │        │
│  │ Master    │ │  Crusher  │ │  Helper   │        │
│  │ 50 hours  │ │ 5 Goals   │ │ 10 Reviews│        │
│  │ 93% to go │ │  40% to go│ │  70% to go│        │
│  └───────────┘ └───────────┘ └───────────┘        │
└─────────────────────────────────────────────────────┘
```

### Level & XP System
```
🎮 YOUR PROGRESS
┌─────────────────────────────────────────────────────┐
│                                                     │
│                    Level 8                          │
│              Scholar Apprentice                     │
│  ┌─────────────────────────────────────────────┐   │
│  │ ████████████████░░░░░░░░░░░░░░░░░░░░░░░░░░ │   │
│  │        1,247 XP / 2,500 XP (Level 9)       │   │
│  └─────────────────────────────────────────────┘   │
│                                                     │
│  Next Reward: "Focus Pro" badge at Level 9         │
│                                                     │
│  Recent XP Gains:                                   │
│  • +50 XP – Completed focus session                │
│  • +30 XP – Met daily study goal                   │
│  • +20 XP – Added 3 subtasks                       │
│                                                     │
│  [View Leaderboard] [Share Progress]               │
└─────────────────────────────────────────────────────┘
```

---

## SCREEN 7: ADVANCED SETTINGS & PROFILE

### Profile Header
```
┌─────────────────────────────────────────────────────┐
│  ┌─────┐                                            │
│  │ 📸  │  Alex Chen                                 │
│  └─────┘  Computer Science, Year 2                 │
│           Member since January 2026                │
│                                                     │
│  [Edit Profile]  [View Public Profile]  [Share]    │
└─────────────────────────────────────────────────────┘
```

### Settings Categories
```
⚙️ SETTINGS

PREFERENCES
┌─────────────────────────────────────────────────────┐
│  ☑ Dark Mode                        [On/Off]       │
│  ☑ Smart Notifications              [On/Off]       │
│  ☐ Study Reminders                  [Configure]    │
│  ☐ Focus Mode Auto-Start            [Configure]    │
│  ☑ Weekly Summary Email             [On/Off]       │
└─────────────────────────────────────────────────────┘

STUDY SETTINGS
┌─────────────────────────────────────────────────────┐
│  Pomodoro Duration                  25 min → [▼]   │
│  Short Break Duration               5 min → [▼]    │
│  Long Break Duration                 15 min → [▼]  │
│  Daily Study Goal                   2 hours → [▼]  │
│  Weekly Study Goal                   20 hours → [▼]│
└─────────────────────────────────────────────────────┘

INTEGRATIONS
┌─────────────────────────────────────────────────────┐
│  Google Calendar                   [Connect]        │
│  Microsoft Outlook                 [Connect]        │
│  Apple Calendar                    [Connect]        │
│  Blackboard Sync                   [Connect]        │
└─────────────────────────────────────────────────────┘

NOTIFICATION PREFERENCES
┌─────────────────────────────────────────────────────┐
│  Deadline Reminders               24h before → [▼] │
│  Study Reminders                   Custom → [▼]    │
│  Achievement Notifications        [On/Off]         │
│  Motivational Quotes               [On/Off]         │
│  Weekly Reports                    [On/Off]         │
└─────────────────────────────────────────────────────┘

DATA & PRIVACY
┌─────────────────────────────────────────────────────┐
│  Export All Data                   [Export]         │
│  Delete Account                    [Delete]         │
│  Privacy Policy                                    │
│  Terms of Service                                  │
└─────────────────────────────────────────────────────┘
```

---

## INTERACTIVITY SPECIFICATIONS

### Micro-interactions
1. **Checkbox Animation:** Ripple effect, checkmark draw animation
2. **Card Tap:** Scale down (0.98) on press, release returns
3. **Progress Update:** Smooth animation when values change
4. **Notification:** Slide from top with haptic feedback
5. **Tab Switch:** Cross-fade transition
6. **Modal Open:** Slide up from bottom with backdrop fade
7. **FAB Menu:** Rotate icon, expand options in radial pattern
8. **Pull to Refresh:** Loading spinner with haptic

### Navigation Patterns
- **Bottom Navigation:** 5 tabs with active indicator and labels
- **Gesture Navigation:** Swipe right to go back, swipe left on tasks to delete
- **Deep Links:** Direct to specific tasks from notifications

### Animation Specifications
- **Duration:** 250-300ms for most transitions
- **Easing:** Cubic-bezier(0.2, 0.9, 0.4, 1.1) for playful feel
- **Spring Animations:** For likes, completions, achievements

---

## ACCESSIBILITY REQUIREMENTS

- **Touch Targets:** Minimum 44x44px
- **Color Contrast:** WCAG AA compliant (4.5:1 minimum)
- **Dynamic Type:** Supports system font scaling
- **VoiceOver:** Proper labeling for all interactive elements
- **Reduce Motion:** Respect system accessibility settings

---

## DELIVERABLES

Create a complete Figma prototype with:

1. **All 7 main screens** fully designed with all components
2. **Working prototype** with click-through interactions
3. **All states** (hover, active, disabled, loading, empty)
4. **Dark mode variant** for all screens
5. **Component library** with all reusable elements
6. **Prototype link** shared with tutor access
7. **PDF export** of all screens in high resolution

---

## INTERACTION FLOW TO DEMONSTRATE

1. **User Journey:** Onboarding → Dashboard → Create Task → Start Focus → Complete Task → View Progress → Check Achievement

2. **Task Completion Flow:** Dashboard → Tap task → View details → Complete subtask → Update progress → Achievement notification

3. **Analytics Deep Dive:** Analytics screen → Module breakdown → Tap module → View detailed analytics → Set improvement goal

---

## UNIQUE FEATURES FROM YOUR DOCUMENTS

This design incorporates ALL features requested:

| Feature | Implementation |
|---------|----------------|
| Task Management | Screen 3 with subtasks, priority, deadlines |
| Progress Tracking | Screen 5 with charts, streaks, calendar |
| Study Timer | Screen 4 with Pomodoro, focus mode |
| Module Organization | Screen 2 & 5 with color-coded modules |
| Notifications | Screen 2 bell icon + Screen 6 notifications |
| Goal Setting | Screen 1C with sub-goals, timeline |
| Gamification | Screen 6 with badges, levels, XP |
| Dark Mode | Full dark mode variant |
| Analytics | Screen 5 with predictive AI |
| Achievements | Screen 6 with unlockable badges |

---

Start designing this premium academic companion app now.
```

---

## 📋 **QUICK REFERENCE CARD**

| Element | Value |
|---------|-------|
| **App Name** | AcaDemia / StudyMaster Pro |
| **Primary Color** | #1E3E5F (Deep Navy) |
| **Secondary Color** | #2D6A4F (Forest Green) |
| **Accent Colors** | #E9B35F (Amber), #E76F51 (Terracotta), #9C89B8 (Lavender) |
| **Font** | SF Pro / Inter / Roboto (system) |
| **Corner Radius** | 16-20px cards, 12px inputs, 48px buttons |
| **Spacing** | 16-24px margins, 8px grid |
| **Target Platform** | iOS/Android premium |

---

## ✅ **WHY THIS DESIGN WILL SCORE HIGHER**

| Criteria | How This Design Excels |
|----------|------------------------|
| **Professionalism** | Enterprise-grade polish, consistent design system, accessibility compliance |
| **Completeness** | All 7 screens with every feature from assignment brief |
| **Innovation** | AI insights, predictive analytics, gamification beyond basic requirements |
| **User Research Integration** | Directly implements findings: progress tracking, friendly notifications, subtasks |
| **Technical Quality** | Micro-interactions, dark mode, component library, responsive |
| **Presentation** | Prototype ready, PDF export, all states included |

---
