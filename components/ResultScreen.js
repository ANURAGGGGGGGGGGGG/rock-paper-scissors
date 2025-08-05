export default function ResultScreen({ scores, matchType, onPlayAgain }) {
  const playerWon = scores.player > scores.opponent;
  const isDraw = scores.player === scores.opponent;

  return (
    <div className="flex flex-col items-center gap-8">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-4">
          {isDraw ? "It's a Draw!" : playerWon ? 'You Won!' : 'You Lost!'}
        </h2>
        <p className="text-xl text-gray-300 mb-2">
          Final Score: {scores.player} - {scores.opponent}
        </p>
        <p className="text-lg text-gray-400">
          {matchType === 1 ? 'Single Match' : `Best of ${matchType}`}
        </p>
      </div>

      <div className="flex gap-4">
        <button
          onClick={onPlayAgain}
          className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors text-lg font-semibold"
        >
          Play Again
        </button>
      </div>
    </div>
  );
} 