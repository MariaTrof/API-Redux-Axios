import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface Card {
  id: number;
  title: string;
  text: string;
  date: Date;
  img: string;
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
        img: string,
      }>
    ) => {
      const { title, text, date, img } = action.payload;
      return [...state, { id: state.length + 1, title, text, date, img }];
    },
    removeCard: (state, action) =>
      state.filter((card) => card.id !== action.payload),
    updateCard: (state, action) =>
      state.map((card) =>
        card.id === action.payload.id ? { ...card, ...action.payload } : card
      ),
  },
});

// Реализация действий, которые будут взаимодействовать с базой данных
export const { addCard, removeCard, updateCard } = cardSlice.actions;


export default cardSlice;


//здесь мы управляем ORM и прописываем actions для создания и изменения карточек
//затем экспортируем slice в основной файл store
