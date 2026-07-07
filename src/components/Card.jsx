import "./Card.css";

/**
 * Card - a single lottery ticket card.
 * Props:
 *  - label: string, e.g. "Ticket 1"
 *  - value: number | null, the revealed digit (null before first draw)
 *  - spinning: boolean, true while this card is rolling through random digits
 *  - displayValue: number, digit to show while spinning
 */
export default function Card({ label, value, spinning, displayValue }) {
  const showValue = spinning ? displayValue : value;

  return (
    <div className={`card ${spinning ? "card--spinning" : ""}`}>
      <div className="card__label">{label}</div>
      <div className="card__digit">
        {showValue === null || showValue === undefined ? "?" : showValue}
      </div>
      <div className="card__perforation" />
    </div>
  );
}
