import ProjectsGrid from '@/components/ProjectsGrid'
import { getSupabaseClient } from '@/lib/supabase'

export const metadata = {
  title: 'SI Command Center',
  description: 'A centralized dashboard to view all active SI projects.',
}

async function getProjects() {
  const supabase = getSupabaseClient()
  const { data, error } = await supabase
    .from('projects')
    .select('project_code, project_name')
    .order('project_code', { ascending: true })

  if (error) {
    throw new Error(error.message)
  }

  return data
}

export default async function Home() {
  let projects = []
  let fetchError = null

  try {
    projects = await getProjects()
  } catch (err) {
    fetchError = err.message
  }

  return (
    <main className="min-h-screen bg-[#0f0f0f] px-6 py-12 md:px-12 lg:px-20">
      {/* Header */}
      <header className="mb-12 text-center">
        <div className="inline-flex items-center gap-3 mb-4">
          <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-emerald-400 text-sm font-medium tracking-widest uppercase">
            Live Dashboard
          </span>
          <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-4">
          SI Command Center
        </h1>
        <p className="text-gray-400 text-lg max-w-xl mx-auto">
          Centralized view of all active projects across the organization.
        </p>
        <div className="mt-6 w-24 h-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent mx-auto" />
      </header>

      {/* Content */}
      {fetchError ? (
        <div className="max-w-lg mx-auto">
          <div className="bg-red-950/50 border border-red-500/30 rounded-2xl p-8 text-center backdrop-blur-sm">
            <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-red-400 font-semibold text-lg mb-2">Failed to load projects</h2>
            <p className="text-red-300/70 text-sm">{fetchError}</p>
          </div>
        </div>
      ) : projects.length === 0 ? (
        <div className="max-w-lg mx-auto text-center">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-12">
            <p className="text-gray-500 text-lg">No projects found.</p>
            <p className="text-gray-600 text-sm mt-2">Add rows to the <code className="text-emerald-400">projects</code> table in Supabase.</p>
          </div>
        </div>
      ) : (
        <>
          {/* Stats bar */}
          <div className="flex justify-center mb-10">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-5 py-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-gray-300 text-sm">
                <span className="text-white font-semibold">{projects.length}</span>{' '}
                {projects.length === 1 ? 'project' : 'projects'} found
              </span>
            </div>
          </div>

          {/* Cards grid */}
          <ProjectsGrid projects={projects} />
        </>
      )}

      {/* Footer */}
      <footer className="mt-20 text-center text-gray-600 text-sm">
        <p>SI Command Center &mdash; Powered by Supabase &amp; Next.js</p>
      </footer>
    </main>
  )
}
