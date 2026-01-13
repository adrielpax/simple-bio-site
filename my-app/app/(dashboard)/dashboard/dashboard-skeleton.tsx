export default function DashboardSkeleton() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-700 to-zinc-600 text-white">
      <header className="border-b border-white/10 bg-black/40 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="h-8 w-32 bg-white/10 rounded animate-pulse" />
          <div className="h-8 w-24 bg-white/10 rounded animate-pulse" />
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="rounded-2xl p-6 backdrop-blur border border-white/10
                bg-gradient-to-br from-black/10 to-white/10 h-32 animate-pulse"
            />
          ))}
        </div>
      </main>
    </div>
  );
}
