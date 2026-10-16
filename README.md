<div align="center">

# 🏋️ FitLog

**Train with intent. Log every set.**

A dark, no-nonsense workout library: pick a lift, lock it into today's plan, and watch the week's work add up.

[Live Demo](https://fit-log-mu-eight.vercel.app/) · [Report Bug](YOUR_GITHUB_REPO_LINK/issues)

</div>

---

## 📖 About

FitLog is a responsive workout library built with Next.js. Browse exercises fetched from an API, view full details for each lift, then add workouts to today's plan or save them for later, all tracked live from the navbar and the My Plan page.

## 🛠️ Technologies Used

| Technology | Purpose |
| --- | --- |
| [Next.js](https://nextjs.org/) (App Router) | UI, routing and server-side data fetching |
| [React](https://react.dev/) + Context API | Global state for Today's Plan and Saved lists |
| [Tailwind CSS](https://tailwindcss.com/) | Styling and responsive design |
| [DaisyUI](https://daisyui.com/) | Tailwind component library |
| [Lucide React](https://lucide.dev/) | Icons |
| [React Hot Toast](https://react-hot-toast.com/) | Toast notifications |

## ✨ Key Features

1. **Workout Library:** a responsive grid of exercise cards (image, muscle-group tags, equipment, duration, calories and rating) fetched from an external API.
2. **Dynamic Details Page:** a two-column layout for every workout with a specs table, step-by-step instructions and action buttons.
3. **Today's Plan and Saved:** add a lift to today's plan or save it for later, with live counters in the navbar and toast notifications.
4. **My Plan Dashboard:** live Exercises / Minutes / Calories stats, tab switching, "Mark as Done", remove, and sorting by duration, calories or rating.
5. **Polished UX:** sticky navbar with active-link highlighting, loading animation and a custom 404 page.

## 🚀 Getting Started

```bash
# 1. Clone the repository
git clone YOUR_GITHUB_REPO_LINK

# 2. Go to the project folder
cd fitlog

# 3. Install dependencies
npm install

# 4. Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
src/
├── app/
│   ├── exercise-details/    # Workout details page
│   ├── my-plan/             # My Plan page
│   ├── workouts/            # Workouts page
│   ├── globals.css
│   ├── layout.js
│   ├── loading.jsx          # Loading animation
│   ├── not-found.jsx        # 404 page
│   └── page.js              # Home (Hero + Library)
├── components/
│   ├── AddToPlanButton.jsx
│   ├── EmptyState.jsx
│   ├── ExerciseCard.jsx
│   ├── Footer.jsx
│   ├── Hero.jsx
│   ├── Library.jsx
│   ├── Navbar.jsx
│   ├── PlanItem.jsx
│   └── SaveForLaterButton.jsx
└── context/
    └── PlanContext.jsx      # Plan and Saved state
```

## 🌐 Deployment

Deployed on **Vercel**: [https://fit-log-mu-eight.vercel.app/](https://fit-log-mu-eight.vercel.app/)

---

<div align="center">

© 2026 FitLog: Workout Library. Train hard, log honest.

</div>
