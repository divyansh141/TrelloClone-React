import { useDispatch } from "react-redux";
import { addCard } from "../features/listSlice";
import { useState } from "react";
import CardForm from "./CardForm";

export default function IndividualList({ list }) {
  const [cardContent, setCardContent] = useState("");
  const [showCardForm, setShowCardForm] = useState(false);
  const dispatch = useDispatch();
  const handleAddCard = () => {
    dispatch(
      addCard({
        listId: list.listId,
        content: cardContent,
      })
    );
    setShowCardForm((prev) => !prev);
    setCardContent("");
  };
  return (
    <div className="list">
      <div className="list__header">
        <h1>{list.title}</h1>
        <button
          onClick={() => {
            showCardForm && cardContent
              ? handleAddCard()
              : setShowCardForm((prev) => !prev);
          }}
          className="btn"
        >
          {showCardForm && cardContent
            ? "Done"
            : showCardForm && !cardContent
            ? "Cancel"
            : "+ Add Card"}
        </button>
      </div>
      <ul className="list__cards">
        {list.cards.map((card) => (
          <li key={card.cardId}>{card.content}</li>
        ))}
        {showCardForm && (
          <li>
            <CardForm
              cardContent={cardContent}
              setCardContent={setCardContent}
            />
          </li>
        )}
      </ul>
    </div>
  );
}
