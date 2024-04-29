export default function CardForm({ cardContent, setCardContent }) {
  return (
    <>
      <textarea
        placeholder="Card"
        className="cardform__text"
        value={cardContent}
        onChange={(e) => setCardContent(e.target.value)}
      ></textarea>
    </>
  );
}
