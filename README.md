# Lucky Ticket Draw

A small React + Vite game: draw 3 ticket cards, each revealing a random digit
(0-9). If the three digits sum to **15**, you win.

## Folder structure

```
lottery-tickets/
├── index.html
├── package.json
├── vite.config.js
├── .gitignore
├── README.md
├── public/
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── App.css
    ├── index.css
    └── components/
        ├── Card.jsx
        ├── Card.css
        ├── TicketBoard.jsx
        ├── TicketBoard.css
        ├── ResultBanner.jsx
        └── ResultBanner.css
```

## Setup

```bash
npm install
npm run dev
```

Then open the printed local URL (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

## How it works

- `App.jsx` holds all game state (current digits, spinning animation state,
  sum, win/lose result, and a played/won counter) and the `handleDraw`
  function that generates 3 random digits and reveals them one at a time.
- `TicketBoard.jsx` lays out three `Card.jsx` components side by side.
- `Card.jsx` is a single presentational ticket card — it shows `?` before a
  draw, a spinning random digit while revealing, and the final digit once
  settled.
- `ResultBanner.jsx` shows the sum and a WIN/LOSE message once a draw finishes.


## Live Link: https://lottery-tickets.vercel.app/
