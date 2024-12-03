// app/game/page.tsx
'use client'; 
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Game() {
  const router = useRouter();
  const [playerNames, setPlayerNames] = useState<string[]>([]);
  const [playerScores, setPlayerScores] = useState<{ [key: string]: number }>({});

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const numPlayers = parseInt(urlParams.get('players') || '3');
    const initialNames: string[] = [];
    const initialScores: { [key: string]: number } = {};

    for (let i = 1; i <= numPlayers; i++) {
      const playerName = prompt(`Enter the name of Player ${i}:`, `Player ${i}`);
      initialNames.push(playerName || `Player ${i}`);
      initialScores[playerName || `Player ${i}`] = 0;
    }

    setPlayerNames(initialNames);
    setPlayerScores(initialScores);
  }, []);

  const addPoint = (player: string) => {
    setPlayerScores((prevScores) => ({
      ...prevScores,
      [player]: prevScores[player] + 1,
    }));
  };

  const removePoint = (player: string) => {
    setPlayerScores((prevScores) => ({
      ...prevScores,
      [player]: prevScores[player] > 0 ? prevScores[player] - 1 : 0,
    }));
  };

  return (
    <div className="container">
      <h2>Score Tracker</h2>
      <div id="players">
        {playerNames.map((player) => (
          <div key={player} className="player">
            <h3>
              {player}: <span>{playerScores[player]}</span>
            </h3>
            <button onClick={() => addPoint(player)}>+1 Point</button>
            <button onClick={() => removePoint(player)}>-1 Point</button>
          </div>
        ))}
      </div>
      <button onClick={() => router.push('/')}>Back to Home</button>
    </div>
  );
}
