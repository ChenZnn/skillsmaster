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
      <p>Enter the number of players (3 to 5):</p>
      <input
        type="number"
        value={numPlayers}
        min="3"
        max="5"
        onChange={(e) => setNumPlayers(Number(e.target.value))}
      />
      <button onClick={handleStart}>Start</button>
    </div>
  );
}
