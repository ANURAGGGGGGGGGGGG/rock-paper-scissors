export default function ModeSelector({ onSelect }) {
  const modes = [
    {
      id: 'offline',
      label: 'Play Offline',
      description: 'Play against computer',
      icon: '🤖',
      color: 'from-purple-600 to-indigo-600'
    },
    {
      id: 'online',
      label: 'Play Online',
      description: 'Play against other players',
      icon: '🌐',
      color: 'from-blue-600 to-cyan-600'
    }
  ];

  return (
    <div className="flex flex-col items-center gap-8">
      <h2 className="mt-10 text-3xl md:text-4xl font-bold tracking-tight bg-gradient-to-r from-purple-400 via-pink-500 to-pink-600 bg-clip-text text-transparent py-3 px-5 rounded-xl border-2 border-purple-300/30 drop-shadow-lg hover:scale-105 transition-transform duration-300 dark:from-indigo-500 dark:to-purple-700 animate-gradient">
        Choose Your Game Mode
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-2xl mt-12">
        {modes.map(({ id, label, description, icon, color }) => (
          <button
            key={id}
            onClick={() => onSelect(id)}
            className={`group relative overflow-hidden rounded-xl px-8 pt-16 pb-12 transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl bg-gradient-to-br ${color} shadow-xl`}
          >
            {/* Sparkle effect */}
            <div className="absolute top-0 left-0 w-full h-full opacity-20 group-hover:opacity-30 transition-opacity">
              <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-white rounded-full animate-ping"></div>
              <div className="absolute top-1/4 right-1/3 w-1 h-1 bg-white rounded-full"></div>
              <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-white rounded-full"></div>
            </div>

            {/* Content container with increased vertical spacing */}
            <div className="relative z-10 flex flex-col items-center gap-y-8"> {/* Added gap-y-8 */}
              {/* Icon with more space */}
              <span className="text-5xl transform transition-transform group-hover:scale-110 group-hover:rotate-6 duration-500">
                {icon}
              </span>

              {/* Stylish label with enhanced typography */}
              <span className="text-2xl font-bold text-white tracking-wider uppercase 
                         drop-shadow-lg bg-clip-text bg-gradient-to-r from-white to-gray-200
                         group-hover:from-yellow-200 group-hover:to-yellow-100 transition-all
                         relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-full after:h-0.5 
                         after:bg-gradient-to-r after:from-transparent after:via-white/50 after:to-transparent
                         after:opacity-0 group-hover:after:opacity-100 after:transition-opacity">
                {label}
              </span>

              {/* Enhanced description with more vertical space */}
              <span className="text-md text-gray-100 font-medium max-w-xs text-center 
                         bg-black/30 backdrop-blur-sm px-4 py-3 rounded-xl 
                         border border-white/10 group-hover:border-white/30
                         transition-all duration-500 transform group-hover:translate-y-1
                         leading-relaxed"> {/* Added leading-relaxed */}
                {description}
              </span>
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