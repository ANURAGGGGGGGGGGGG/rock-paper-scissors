export default function Scoreboard({ scores }) {
  return (
    <div className="flex justify-center gap-8 mb-8">
      <div className="text-center">
        <h3 className="text-xl font-semibold mb-2">Player</h3>
        <p className="text-3xl font-bold">{scores.player}</p>
      </div>
      <div className="text-center">
        <h3 className="text-xl font-semibold mb-2">Opponent</h3>
        <p className="text-3xl font-bold">{scores.opponent}</p>
      </div>
    </div>
  );
} 