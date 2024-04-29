import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  lists: [],
};

export const listSlice = createSlice({
  name: "lists",
  initialState,
  reducers: {
    createList: (state, action) => {
      const list = {
        listId: nanoid(),
        title: action.payload.title,
        cards: [{ cardId: nanoid(), content: action.payload.content }],
      };
      state.lists.push(list);
    },
    removeList: (state) => {
      state.lists = [];
    },
    addCard: (state, action) => {
      const card = { cardId: nanoid(), content: action.payload.content };
      state.lists.map((list) =>
        list.listId === action.payload.listId ? list.cards.push(card) : list
      );
    },
  },
});

export const { createList, removeList, addCard } = listSlice.actions;
export default listSlice.reducer;
