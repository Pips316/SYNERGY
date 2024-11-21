import React from 'react';
import { Target, Zap, Heart } from 'lucide-react';

interface GameStatsProps {
  score: number;
  length: number;
  lives: number;
}

export default function GameStats({ score, length, lives }: GameStatsProps) {
  return (
    <div className="mb-2 flex items-center gap-4">
      <div className="flex items-center gap-1">
        <Zap className="w-4 h-4 text-orange-400" />
        <span className="text-lg font-bold">Score: {score}</span>
      </div>
      <div className="flex items-center gap-1">
        <Target className="w-4 h-4 text-green-400" />
        <span className="text-lg font-bold">Energy: {length}</span>
      </div>
      <div className="flex items-center gap-1">
        {Array.from({ length: 3 }).map((_, i) => (
          <Heart
            key={i}
            className={`w-4 h-4 ${i < lives ? 'text-red-500 fill-red-500' : 'text-gray-600'}`}
          />
        ))}
      </div>
    </div>
  );
}