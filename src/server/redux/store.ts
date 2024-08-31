import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cardSlice from "./cardSlice";

const rootReducer = combineReducers({
  cards: cardSlice.reducer,
  //сюда отдельный слайс для user будет
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
