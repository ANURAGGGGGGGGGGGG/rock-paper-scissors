export default function FindingOpponent() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 py-12">
      <div className="relative w-24 h-24">
        <div className="absolute inset-0 border-4 border-purple-500 rounded-full animate-spin border-t-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-4xl">🎮</span>
        </div>
      </div>
      
      <div className="text-center space-y-4">
        <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Finding Opponent...
        </h3>
        <p className="text-gray-300 animate-pulse">
          Please wait while we match you with another player
        </p>
      </div>
      
      <div className="flex gap-2">
        <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
        <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
        <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
      </div>
    </div>
  );
} 