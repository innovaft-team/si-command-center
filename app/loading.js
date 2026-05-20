export default function Loading() {
  return (
    <main className="min-h-screen bg-[#0f0f0f] px-6 py-12 md:px-12 lg:px-20">
      {/* Header skeleton */}
      <header className="mb-12 text-center">
        <div className="inline-flex items-center gap-3 mb-4">
          <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
          <div className="w-28 h-4 bg-white/10 rounded-full animate-pulse" />
          <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
        </div>
        <div className="w-80 h-12 bg-white/10 rounded-xl mx-auto animate-pulse mb-4" />
        <div className="w-64 h-5 bg-white/5 rounded-lg mx-auto animate-pulse" />
        <div className="mt-6 w-24 h-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent mx-auto" />
      </header>

      {/* Stats bar skeleton */}
      <div className="flex justify-center mb-10">
        <div className="w-40 h-8 bg-white/5 border border-white/10 rounded-full animate-pulse" />
      </div>

      {/* Cards skeleton grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="bg-white/5 border border-white/10 rounded-2xl p-6 animate-pulse"
            style={{ animationDelay: `${i * 50}ms` }}
          >
            <div className="w-20 h-7 bg-white/10 rounded-lg mb-4" />
            <div className="w-full h-5 bg-white/10 rounded mb-2" />
            <div className="w-2/3 h-5 bg-white/5 rounded" />
          </div>
        ))}
      </div>
    </main>
  )
}
