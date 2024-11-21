import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ControlsProps {
  onTurnLeft: () => void;
  onTurnRight: () => void;
}

export default function Controls({ onTurnLeft, onTurnRight }: ControlsProps) {
  return (
    <div className="flex gap-8">
      <button
        className="w-16 h-16 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center text-gray-300 active:bg-gray-600 transition-colors"
        onClick={onTurnLeft}
      >
        <ChevronLeft className="w-8 h-8" />
      </button>
      <button
        className="w-16 h-16 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center text-gray-300 active:bg-gray-600 transition-colors"
        onClick={onTurnRight}
      >
        <ChevronRight className="w-8 h-8" />
      </button>
    </div>
  );
}