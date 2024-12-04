// app/page.tsx
'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [numPlayers, setNumPlayers] = useState(3);
  const router = useRouter();

  const handleStart = () => {
    if (numPlayers >= 3 && numPlayers <= 5) {
      router.push(`/game?players=${numPlayers}`);
    } else {
      alert('Please enter a number between 3 and 5.');
    }
  };

  return (
    <div className="container">
      <h1>Welcome to the Game</h1>
      <p>Enter the number of players (3 to 5):</p>
      <input
        type="number"
        value={numPlayers}
        min="3"
        max="5"
        onChange={(e) => setNumPlayers(Number(e.target.value))}
      />

      {/* Bouton démarrer avec icône */}
      <button onClick={handleStart}>Start</button>

      {/* Bouton ajouter un joueur */}
      <button className="add-player" onClick={() => setNumPlayers((prev) => Math.min(prev + 1, 5))}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
          <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Add Player
      </button>

      {/* Bouton supprimer un joueur */}
      <button className="remove-player" onClick={() => setNumPlayers((prev) => Math.max(prev - 1, 3))}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
          <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Remove Player
      </button>
    </div>
  );
}
