'use client';

import { useState } from 'react';
import ModeSelector from '../components/ModeSelector';
import MatchSettings from '../components/MatchSettings';
import GameBoard from '../components/GameBoard';
import Scoreboard from '../components/Scoreboard';
import ResultScreen from '../components/ResultScreen';
import Rules from '../components/Rules';
import FindingOpponent from '../components/FindingOpponent';

export default function Home() {
  const [gameMode, setGameMode] = useState(null);
  const [matchType, setMatchType] = useState(null);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameCompleted, setGameCompleted] = useState(false);
  const [scores, setScores] = useState({ player: 0, opponent: 0 });
  const [isFindingOpponent, setIsFindingOpponent] = useState(false);

  const handleModeSelect = (mode) => {
    setGameMode(mode);
  };

  const handleMatchTypeSelect = (type) => {
    setMatchType(type);
    if (gameMode === 'online') {
      setIsFindingOpponent(true);
      // Simulate finding opponent after 3 seconds
      setTimeout(() => {
        setIsFindingOpponent(false);
        setGameStarted(true);
      }, 3000);
    } else {
      setGameStarted(true);
    }
  };

  const handleGameReset = () => {
    setGameMode(null);
    setMatchType(null);
    setGameStarted(false);
    setGameCompleted(false);
    setScores({ player: 0, opponent: 0 });
    setIsFindingOpponent(false);
  };

  const handleGameComplete = () => {
    setGameCompleted(true);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white p-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-12">
          🪨 Rock Paper Scissors ✂️
        </h1>

        <div className="space-y-16">
          {!gameMode && (
            <>
              <div className="mt-16">
                <ModeSelector onSelect={handleModeSelect} />
              </div>
            </>
          )}

          {gameMode && !matchType && (
            <MatchSettings onSelect={handleMatchTypeSelect} />
          )}

          {isFindingOpponent && (
            <FindingOpponent />
          )}

          {gameStarted && gameMode && matchType && !gameCompleted && !isFindingOpponent && (
            <div className="space-y-12">
              <Scoreboard scores={scores} />
              <GameBoard
                mode={gameMode}
                matchType={matchType}
                onScoreUpdate={setScores}
                onGameComplete={handleGameComplete}
              />
            </div>
          )}

          {gameCompleted && (
            <ResultScreen
              scores={scores}
              matchType={matchType}
              onPlayAgain={handleGameReset}
            />
          )}
          <Rules />
        </div>
      </div>
    </main>
  );
} 