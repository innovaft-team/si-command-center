'use client'

export default function ProjectsGrid({ projects }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {projects.map((project, index) => (
        <div
          key={project.project_code}
          id={`project-card-${project.project_code}`}
          className="group relative bg-white rounded-2xl p-6 shadow-lg shadow-black/40 hover:shadow-emerald-500/10 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
          style={{ animationDelay: `${index * 60}ms` }}
        >
          {/* Decorative top accent */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl" />

          {/* Code badge */}
          <div className="mb-4">
            <span className="inline-block bg-gray-900 text-emerald-400 text-xs font-mono font-bold tracking-widest px-3 py-1.5 rounded-lg">
              {project.project_code}
            </span>
          </div>

          {/* Project name */}
          <h2 className="text-gray-900 font-semibold text-lg leading-snug group-hover:text-gray-700 transition-colors duration-200">
            {project.project_name}
          </h2>

          {/* Decorative arrow on hover */}
          <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-1 group-hover:translate-x-0">
            <svg className="w-5 h-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      ))}
    </div>
  )
}
