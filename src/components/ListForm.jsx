import { useState } from "react";
import CardForm from "./CardForm";
import { useDispatch } from "react-redux";
import { createList } from "../features/listSlice";

function ListForm({ toggleForm }) {
  const [title, setTitle] = useState("");
  const [cardContent, setCardContent] = useState("");
  const dispatch = useDispatch();

  const handleAddList = (e) => {
    e.preventDefault();
    dispatch(createList({ title, content: cardContent }));
    toggleForm((prev) => !prev);
  };

  return (
    <>
      <div className="addlist">
        <form onSubmit={handleAddList} className="addlist__form">
          <input
            type="text"
            placeholder="List Title"
            className="addlist__input"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <CardForm cardContent={cardContent} setCardContent={setCardContent} />
          <button
            type="submit"
            className="btn"
            disabled={!title && !cardContent}
          >
            + Add
          </button>
        </form>
      </div>
    </>
  );
}

export default ListForm;
