# SI Command Center

A minimal, production-ready admin dashboard built with **Next.js**, **Supabase**, and **Tailwind CSS**. Displays all project rows from a Supabase `projects` table as responsive cards on a dark-themed UI.

![SI Command Center](https://img.shields.io/badge/Next.js-15-black?logo=next.js) ![Supabase](https://img.shields.io/badge/Supabase-Database-3ECF8E?logo=supabase) ![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-4-06B6D4?logo=tailwindcss)

---

## Features

- 🌑 Dark admin dashboard UI (`#0f0f0f` background)
- 📋 Responsive card grid — 1 to 4 columns depending on screen size
- ⚡ Server-side data fetching (Next.js App Router Server Components)
- 🦴 Animated skeleton loading state
- ❌ Graceful error handling
- 🔒 No credentials ever exposed — environment variables only

---

## Project Structure

```
si-command-center/
├── app/
│   ├── globals.css       # Global styles + Tailwind import
│   ├── layout.js         # Root layout with Inter font
│   ├── loading.js        # Skeleton loading UI (App Router)
│   └── page.js           # Server Component — fetches & renders projects
├── components/
│   └── ProjectsGrid.js   # Client Component — responsive card grid
├── lib/
│   └── supabase.js       # Supabase client (reads from env vars)
├── .env.example          # Template for required env variables
├── .gitignore
└── README.md
```

---

## Prerequisites

- Node.js 18+
- A [Supabase](https://supabase.com) project with a `projects` table containing:
  - `project_code` (text)
  - `project_name` (text)

---

## Environment Variables

Copy `.env.example` to `.env.local` and fill in your values:

```bash
cp .env.example .env.local
```

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
```

> ⚠️ **Never commit `.env.local` or any file with real credentials.** Both are listed in `.gitignore`.

---

## Local Development

```bash
# 1. Install dependencies
npm install

# 2. Set up environment variables
cp .env.example .env.local
# Edit .env.local with your Supabase credentials

# 3. Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Supabase Table Setup

Run this SQL in your Supabase SQL Editor to create the required table:

```sql
create table projects (
  id bigint generated always as identity primary key,
  project_code text not null,
  project_name text not null
);

-- Enable Row Level Security (recommended)
alter table projects enable row level security;

-- Allow public read access (anon key can read)
create policy "Allow public read"
  on projects for select
  using (true);

-- Sample data
insert into projects (project_code, project_name) values
  ('PRJ001', 'CRM Dashboard'),
  ('PRJ002', 'Internal Analytics Tool'),
  ('PRJ003', 'Customer Portal');
```

---

## Deployment

### Option 1: Render (Free Tier)

1. Push this repository to GitHub (public).
2. Go to [render.com](https://render.com) → **New** → **Web Service**.
3. Connect your GitHub repository.
4. Configure:
   - **Environment**: `Node`
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm start`
5. Under **Environment Variables**, add:
   - `NEXT_PUBLIC_SUPABASE_URL` = your Supabase project URL
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY` = your Supabase anon key
6. Click **Deploy**.

### Option 2: Railway (Free Tier)

1. Push this repository to GitHub (public).
2. Go to [railway.app](https://railway.app) → **New Project** → **Deploy from GitHub repo**.
3. Select your repository.
4. Under **Variables**, add:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
5. Railway auto-detects Next.js and deploys.

---

## Security Checklist

- [x] No `.env` files committed to Git
- [x] All credentials loaded from environment variables
- [x] `.env*` patterns in `.gitignore`
- [x] `.env.example` contains only variable names (no values)
- [x] Supabase anon key only (no service role key used)

---

## License

MIT
