import "./ResultBanner.css";

/**
 * ResultBanner - shows the sum of the 3 digits and whether it's a win.
 * Props:
 *  - sum: number | null
 *  - result: "win" | "lose" | null
 */
export default function ResultBanner({ sum, result }) {
  if (sum === null) {
    return (
      <div className="result-banner result-banner--idle">
        Draw your 3 tickets — match a sum of 15 to win.
      </div>
    );
  }

  return (
    <div className={`result-banner result-banner--${result}`}>
      <div className="result-banner__sum">Sum: {sum}</div>
      <div className="result-banner__verdict">
        {result === "win" ? "🎉 YOU WIN!" : "😔 YOU LOSE"}
      </div>
    </div>
  );
}
