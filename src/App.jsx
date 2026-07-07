import { useEffect, useRef, useState } from "react";
import TicketBoard from "./components/TicketBoard.jsx";
import ResultBanner from "./components/ResultBanner.jsx";
import "./App.css";

const WINNING_SUM = 15;
const DIGIT_MIN = 0;
const DIGIT_MAX = 9;

function randomDigit() {
  return DIGIT_MIN + Math.floor(Math.random() * (DIGIT_MAX - DIGIT_MIN + 1));
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default function App() {
  const [digits, setDigits] = useState([null, null, null]);
  const [spinningIndex, setSpinningIndex] = useState(-1);
  const [spinValue, setSpinValue] = useState(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [sum, setSum] = useState(null);
  const [result, setResult] = useState(null);
  const [rounds, setRounds] = useState({ played: 0, wins: 0 });
  const spinTimer = useRef(null);

  useEffect(() => () => clearInterval(spinTimer.current), []);

  async function handleDraw() {
    if (isDrawing) return;
    setIsDrawing(true);
    setSum(null);
    setResult(null);
    setDigits([null, null, null]);

    const finalDigits = [randomDigit(), randomDigit(), randomDigit()];

    for (let i = 0; i < 3; i++) {
      setSpinningIndex(i);

      spinTimer.current = setInterval(() => {
        setSpinValue(randomDigit());
      }, 60);

      await sleep(550);
      clearInterval(spinTimer.current);
      setSpinValue(null);

      setDigits((prev) => {
        const next = [...prev];
        next[i] = finalDigits[i];
        return next;
      });
      await sleep(120);
    }

    setSpinningIndex(-1);

    const total = finalDigits.reduce((a, b) => a + b, 0);
    const outcome = total === WINNING_SUM ? "win" : "lose";
    setSum(total);
    setResult(outcome);
    setRounds((r) => ({
      played: r.played + 1,
      wins: r.wins + (outcome === "win" ? 1 : 0),
    }));
    setIsDrawing(false);
  }

  return (
    <div className="app">
      <header className="app__header">
        <div className="app__eyebrow">Three Card Draw</div>
        <h1 className="app__title">Lucky Ticket Draw</h1>
        <p className="app__subtitle">
          Draw 3 digits — if they add up to <strong>{WINNING_SUM}</strong>, you win.
        </p>
      </header>

      <TicketBoard digits={digits} spinningIndex={spinningIndex} spinValue={spinValue} />

      <div className="app__actions">
        <button className="app__draw-btn" onClick={handleDraw} disabled={isDrawing}>
          {isDrawing ? "Drawing…" : "Draw Tickets"}
        </button>
      </div>

      <ResultBanner sum={sum} result={result} />

      <footer className="app__footer">
        Played: {rounds.played} &nbsp;·&nbsp; Wins: {rounds.wins}
      </footer>
    </div>
  );
}
