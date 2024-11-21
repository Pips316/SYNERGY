import React from 'react';

interface GameOverProps {
  score: number;
  onRestart: () => void;
}

export default function GameOver({ score, onRestart }: GameOverProps) {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-75 rounded-lg">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Game Over!</h2>
        <p className="text-xl mb-4">Final Score: {score}</p>
        <button
          onClick={onRestart}
          className="px-6 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg transition-colors"
        >
          Play Again
        </button>
      </div>
    </div>
  );
}