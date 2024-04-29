import { useSelector } from "react-redux";
import ListForm from "./components/ListForm";
import IndividualList from "./components/IndividualList";
import { useState } from "react";

function App() {
  const [showListForm, setShowListForm] = useState(false);
  const lists = useSelector((state) => state.lists);
  console.log(lists);
  return (
    <>
      <div className="main">
        {showListForm && <ListForm toggleForm={setShowListForm} />}
        {lists.length > 0 ? (
          lists.map((list) => <IndividualList key={list.listId} list={list} />)
        ) : (
          <p className="no-lists">Create A List</p>
        )}
        <button
          className="btn addlist__btn"
          onClick={() => setShowListForm((prev) => !prev)}
        >
          {showListForm ? "Cancel" : "+ New List"}
        </button>
      </div>
    </>
  );
}

export default App;
