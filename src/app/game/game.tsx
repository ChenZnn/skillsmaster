'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Game() {
  const [players, setPlayers] = useState<number[]>([0, 0, 0, 0, 0]); // 5 joueurs
  const [isGameOver, setIsGameOver] = useState(false);
  const router = useRouter();

  const handleScoreChange = (playerIndex: number, increment: number) => {
    const newPlayers = [...players];
    newPlayers[playerIndex] += increment;
    setPlayers(newPlayers);

    if (newPlayers[playerIndex] >= 20) {
      setIsGameOver(true);
    }
  };

  const handleBackToHome = () => {
    router.push('/');
  };

  // Trouver l'indice du joueur qui a gagné
  const winnerIndex = players.findIndex(score => score >= 20);

  return (
    <div className="container">
      <h2>Game in Progress</h2>

      {!isGameOver ? (
        <div>
          <p>Current scores:</p>
          <ul>
            {players.map((score, index) => (
              <li key={index}>
                Player {index + 1}: {score} points
                <button onClick={() => handleScoreChange(index, 1)}>Add Point</button>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div>
          <h3 className="game-h3">
            Congratulations Player {winnerIndex + 1}! You won the game with 20 points!
          </h3>
        </div>
      )}

      <div className="button-container">
        <button onClick={handleBackToHome}>Back to Home</button>
      </div>
    </div>
  );
}
