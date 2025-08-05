'use client';

import { useState, useEffect } from 'react';

const choices = [
  { id: 'rock', icon: '🪨', color: 'from-red-600 to-red-800' },
  { id: 'paper', icon: '📄', color: 'from-blue-600 to-blue-800' },
  { id: 'scissors', icon: '✂️', color: 'from-green-600 to-green-800' }
];

export default function GameBoard({ mode, matchType, onScoreUpdate, onGameComplete }) {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [opponentChoice, setOpponentChoice] = useState(null);
  const [result, setResult] = useState(null);
  const [round, setRound] = useState(1);
  const [gameOver, setGameOver] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const getRandomChoice = () => {
    return choices[Math.floor(Math.random() * choices.length)].id;
  };

  const determineWinner = (player, opponent) => {
    if (player === opponent) return 'draw';
    if (
      (player === 'rock' && opponent === 'scissors') ||
      (player === 'paper' && opponent === 'rock') ||
      (player === 'scissors' && opponent === 'paper')
    ) {
      return 'win';
    }
    return 'lose';
  };

  const handleChoice = (choice) => {
    setIsAnimating(true);
    setPlayerChoice(choice);
    
    if (mode === 'offline') {
      const opponent = getRandomChoice();
      setOpponentChoice(opponent);
      const roundResult = determineWinner(choice, opponent);
      setResult(roundResult);
      
      // Update scores - +1 only on win, +0 on draw/loss, accumulate from previous
      onScoreUpdate(prev => ({
        player: prev.player + (roundResult === 'win' ? 1 : 0),
        opponent: prev.opponent + (roundResult === 'lose' ? 1 : 0),
      }));

      // Check if game is over
      if (round === matchType) {
        setGameOver(true);
        onGameComplete();
      } else {
        setRound((prev) => prev + 1);
      }
    } else if (mode === 'online') {
      // In online mode, we'll simulate the opponent's choice after a short delay
      setTimeout(() => {
        const opponent = getRandomChoice();
        setOpponentChoice(opponent);
        const roundResult = determineWinner(choice, opponent);
        setResult(roundResult);
        
        // Update scores - +1 only on win, +0 on draw/loss, accumulate from previous
        onScoreUpdate(prev => ({
          player: prev.player + (roundResult === 'win' ? 1 : 0),
          opponent: prev.opponent + (roundResult === 'lose' ? 1 : 0),
        }));

        // Check if game is over
        if (round === matchType) {
          setGameOver(true);
          onGameComplete();
        } else {
          setRound((prev) => prev + 1);
        }
      }, 1000);
    }
  };

  const resetRound = () => {
    setPlayerChoice(null);
    setOpponentChoice(null);
    setResult(null);
    setIsAnimating(false);
  };

  useEffect(() => {
    if (result) {
      const timer = setTimeout(resetRound, 2000);
      return () => clearTimeout(timer);
    }
  }, [result]);

  if (gameOver) {
    return (
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Game Over!</h2>
        <button
          onClick={onGameComplete}
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
        >
          Play Again
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-12">
      <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
        Round {round} of {matchType}
      </div>
      
      <div className="flex gap-8">
        {choices.map(({ id, icon, color }) => (
          <button
            key={id}
            onClick={() => handleChoice(id)}
            disabled={!!playerChoice || isAnimating}
            className={`group relative overflow-hidden rounded-xl p-8 transition-all duration-300 
              ${playerChoice === id 
                ? 'scale-110 shadow-2xl' 
                : 'hover:scale-105 hover:shadow-xl'
              } 
              ${isAnimating ? 'opacity-50 cursor-not-allowed' : ''}
              bg-gradient-to-br ${color}`}
          >
            <div className="relative z-10 text-5xl transform transition-transform group-hover:scale-110">
              {icon}
            </div>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
          </button>
        ))}
      </div>

      {result && (
        <div className={`text-3xl font-bold transition-all duration-300 transform scale-110
          ${result === 'win' ? 'text-green-400' : result === 'lose' ? 'text-red-400' : 'text-yellow-400'}`}>
          {result === 'win' ? 'You won! 🎉' : result === 'lose' ? 'You lost! 😢' : "It&apos;s a draw! 🤝"}
        </div>
      )}

      {(playerChoice || opponentChoice) && (
        <div className="flex gap-16">
          <div className="text-center transform transition-all duration-300 hover:scale-105">
            <p className="text-xl font-semibold mb-3">Your choice</p>
            <p className="text-5xl">
              {choices.find(c => c.id === playerChoice)?.icon}
            </p>
          </div>
          <div className="text-center transform transition-all duration-300 hover:scale-105">
            <p className="text-xl font-semibold mb-3">Opponent&apos;s choice</p>
            <p className="text-5xl">
              {choices.find(c => c.id === opponentChoice)?.icon}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}