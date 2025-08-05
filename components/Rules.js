export default function Rules() {
  const rules = [
    {
      title: "How to Play",
      items: [
        "Choose between Rock 🪨, Paper 📄, or Scissors ✂️",
        "Rock beats Scissors, Scissors beats Paper, Paper beats Rock",
        "In case of a draw, both players get a point",
        "First to reach the required number of rounds wins!"
      ]
    },
    {
      title: "Game Modes",
      items: [
        "Offline Mode: Play against the computer",
        "Online Mode: Play against other players (coming soon)",
        "Choose from different match lengths: 1, 3, 5, or 7 rounds"
      ]
    },
    {
      title: "Tips",
      items: [
        "Watch for patterns in your opponent's choices",
        "Mix up your choices to stay unpredictable",
        "Have fun and enjoy the game! 🎮"
      ]
    }
  ];

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Animated background patterns */}
      <div className="absolute inset-0 overflow-hidden rounded-2xl">
        {/* Floating circles */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl animate-float-slow-reverse" />
        
        {/* Animated grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f46e5/10_1px,transparent_1px),linear-gradient(to_bottom,#4f46e5/10_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        
        {/* Glowing orbs */}
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-purple-400/30 rounded-full animate-pulse-slow" />
        <div className="absolute bottom-1/3 right-1/3 w-3 h-3 bg-indigo-400/30 rounded-full animate-pulse-slow-delayed" />
        <div className="absolute top-2/3 left-1/3 w-2 h-2 bg-pink-400/30 rounded-full animate-pulse-slow" />
      </div>

      {/* Main content */}
      <div className="relative bg-gradient-to-br from-purple-900/50 to-indigo-900/50 rounded-2xl p-8 shadow-2xl border border-purple-500/20 backdrop-blur-sm">
        <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
          Game Rules & Instructions
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {rules.map((section, index) => (
            <div key={index} className="space-y-4 transform hover:scale-[1.02] transition-transform duration-300">
              <h3 className="text-xl font-semibold text-purple-300 mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-3 text-gray-200 group">
                    <span className="text-purple-400 mt-1 group-hover:scale-125 transition-transform">•</span>
                    <span className="group-hover:text-purple-200 transition-colors">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-purple-300 text-lg animate-bounce-slow">
            Ready to play? Select your game mode above! 🚀
          </p>
        </div>
      </div>
    </div>
  );
} 