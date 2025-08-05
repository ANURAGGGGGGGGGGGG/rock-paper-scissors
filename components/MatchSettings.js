export default function MatchSettings({ onSelect }) {
  const matchTypes = [
    { rounds: 1, label: 'Single Match', description: 'Quick game' },
    { rounds: 3, label: 'Best of 3', description: 'Short series' },
    { rounds: 5, label: 'Best of 5', description: 'Medium series' },
    { rounds: 7, label: 'Best of 7', description: 'Long series' },
  ];

  return (
    <div className="flex flex-col items-center gap-12">
      <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
        Select Match Type
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-2xl mt-12">
        {matchTypes.map(({ rounds, label, description }) => (
          <button
            key={rounds}
            onClick={() => onSelect(rounds)}
            className="group relative overflow-hidden rounded-xl px-8 py-10 transition-all duration-300 hover:scale-[1.03] hover:shadow-xl bg-gradient-to-br from-purple-600/90 to-indigo-600/90 shadow-lg"
          >
            {/* Glitter effect */}
            <div className="absolute top-0 left-0 w-full h-full opacity-15 group-hover:opacity-25 transition-opacity">
              <div className="absolute top-1/4 left-1/3 w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
              <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-white rounded-full"></div>
            </div>

            {/* Content container with improved spacing */}
            <div className="relative z-10 space-y-6">
              <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-white to-purple-100 bg-clip-text text-transparent">
                {label}
              </div>

              <div className="text-base text-gray-200 opacity-95 leading-relaxed mb-6">
                {description}
              </div>

              <div className="flex items-center justify-between">
                <div className="text-lg font-semibold bg-purple-800/40 px-4 py-2 rounded-full border border-purple-400/30 group-hover:border-purple-300/60 transition-colors">
                  {rounds} {rounds === 1 ? 'Round' : 'Rounds'}
                </div>

                {/* Chevron icon */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-200 opacity-80 group-hover:opacity-100 group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />

            {/* Animated border */}
            <div className="absolute inset-0 border-2 border-white/10 rounded-xl group-hover:border-white/30 transition-all duration-500" />
          </button>
        ))}
      </div>
    </div>
  );
} 