import Card from "./Card.jsx";
import "./TicketBoard.css";

/**
 * TicketBoard - lays out the 3 ticket cards side by side.
 * Props:
 *  - digits: array of 3 numbers (or null) currently revealed
 *  - spinningIndex: index of the card currently spinning, or -1 if none
 *  - spinValue: the random digit shown on the spinning card
 */
export default function TicketBoard({ digits, spinningIndex, spinValue }) {
  return (
    <div className="ticket-board">
      {digits.map((value, i) => (
        <Card
          key={i}
          label={`Ticket ${i + 1}`}
          value={value}
          spinning={spinningIndex === i}
          displayValue={spinValue}
        />
      ))}
    </div>
  );
}
