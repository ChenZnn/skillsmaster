'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Game() {
  const router = useRouter();
  const [playerNames, setPlayerNames] = useState<string[]>([]);
  const [playerScores, setPlayerScores] = useState<{ [key: string]: number }>({});

  useEffect(() => {
    const savedNames = localStorage.getItem('playerNames');
    const savedScores = localStorage.getItem('playerScores');

    if (savedNames && savedScores) {
      setPlayerNames(JSON.parse(savedNames));
      setPlayerScores(JSON.parse(savedScores));
    } else {
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

      localStorage.setItem('playerNames', JSON.stringify(initialNames));
      localStorage.setItem('playerScores', JSON.stringify(initialScores));
    }
  }, []);

  const addPoint = (player: string) => {
    setPlayerScores((prevScores) => {
      const newScores = { ...prevScores, [player]: prevScores[player] + 1 };
      localStorage.setItem('playerScores', JSON.stringify(newScores));
      return newScores;
    });
  };

  const removePoint = (player: string) => {
    setPlayerScores((prevScores) => {
      const newScores = {
        ...prevScores,
        [player]: prevScores[player] > 0 ? prevScores[player] - 1 : 0,
      };
      localStorage.setItem('playerScores', JSON.stringify(newScores));
      return newScores;
    });
  };

  const resetScores = () => {
    const newScores = playerNames.reduce((scores, player) => {
      scores[player] = 0;
      return scores;
    }, {} as { [key: string]: number });

    setPlayerScores(newScores);
    localStorage.setItem('playerScores', JSON.stringify(newScores));
  };

  const handleBackToHome = () => {
    resetScores(); // Réinitialiser les scores
    localStorage.removeItem('playerNames'); // Supprimer les noms de joueurs pour un redémarrage propre
    localStorage.removeItem('playerScores'); // Supprimer les scores pour un redémarrage propre
    router.push('/'); // Rediriger vers la page d'accueil
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
      <div className="buttons">
        <button onClick={handleBackToHome}>Back to Home</button>
        <button onClick={resetScores}>Reset Scores</button>
      </div>
    </div>
  );
}
