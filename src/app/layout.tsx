// app/layout.tsx
import './globals.css'; // Importation du CSS global
import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en"> {/* Adding html tag with lang attribute */}
      <body>
        <header>
          <h1>Player Score Tracker</h1>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
