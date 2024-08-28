import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Card {
  id: number;
  title: string;
  text: string;
  date: Date;
}

const cardSlice = createSlice({
  name: "cards",
  initialState: [] as Card[],
  reducers: {
    addCard: (
      state,
      action: PayloadAction<{
        id: number;
        title: string;
        text: string;
        date: Date;
      }>
    ) => {
      const { title, text, date } = action.payload;
      return [...state, { id: state.length + 1, title, text, date }];
    },
    removeCard: (state, action) =>
      state.filter((card) => card.id !== action.payload),
    updateCard: (state, action) =>
      state.map((card) =>
        card.id === action.payload.id ? { ...card, ...action.payload } : card
      ),
  },
});

export const { addCard, removeCard, updateCard } = cardSlice.actions;
export default cardSlice;
//здесь мы управляем ORM и прописываем actions для создания и изменения карточек
//затем экспортируем slice в основной файл store
