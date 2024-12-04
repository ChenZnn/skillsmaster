// app/layout.tsx
import { ReactNode } from 'react';
import Link from 'next/link';
import './globals.css';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header>
          <h1>Player Score Tracker</h1>
          <nav>
            <Link href="/rules">
              <button className="rules-button">View Rules</button>
            </Link>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
