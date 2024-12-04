// app/rules/page.tsx
'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

export default function Rules() {
  const router = useRouter();

  const handleGoBack = () => {
    // Naviguer vers la page de jeu, en préservant l'état du jeu
    router.push('/game');
  };

  return (
    <div className="container">
      <h2>Game Rules: Soft Skills at Work</h2>
      <p><strong>Setup:</strong></p>
      <ul>
        <li>Players: 3 to 5 players.</li>
        <li>Materials:
          <ul>
            <li>Situation Cards: Cards with workplace scenarios.</li>
            <li>Soft Skill Cards: Cards with soft skills like "Empathy," "Creativity," "Teamwork," etc.</li>
          </ul>
        </li>
        <li>Each player gets 5 Soft Skill Cards to start.</li>
      </ul>

      <p><strong>Objective:</strong></p>
      <p>Earn 20 points by choosing and voting on the best soft skill to handle workplace situations.</p>

      <p><strong>How to Play:</strong></p>
      <ol>
        <li><strong>Starting a Round:</strong> One player draws a Situation Card and reads it out loud.</li>
        <li><strong>Choosing a Soft Skill:</strong> Each player secretly chooses one Soft Skill Card from their hand that they think fits the situation best. All chosen cards are shuffled and placed face up in the middle.</li>
        <li><strong>Explaining Choices (optional):</strong> Players can explain why their chosen skill fits the situation.</li>
        <li><strong>Voting:</strong> Everyone votes for the card they think is the best match. Players can’t vote for their own card.</li>
        <li><strong>Scoring:</strong> The player whose card gets the most votes earns 1 point. No tie is possible.</li>
        <li><strong>End of Round:</strong> Players draw a new Soft Skill Card to replace the one they used, so they always have 5 cards.</li>
      </ol>

      <p><strong>Winning the Game:</strong></p>
      <p>The game ends after a player gets 20 points.</p>

      <p><strong>Optional Rules to Add Variety:</strong></p>
      <ul>
        <li>Award extra points if a player manages to include a personal (false or true) anecdote or a funny story to justify their choice.</li>
        <li>If the player invents the anecdote or story, and the players vote that it was false and it’s indeed false, +1 point for other players.</li>
        <li>If the player invents the anecdote or story, and the players vote that it was false and it’s true, -1 point for other players.</li>
        <li>And another extra point if all players vote for the same card.</li>
      </ul>

      <button onClick={handleGoBack}>Back to Game</button>
    </div>
  );
}
