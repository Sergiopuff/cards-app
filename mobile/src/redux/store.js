import {configureStore} from '@reduxjs/toolkit';
import cards from './slices/cards';
import card from './slices/card';

export const store = configureStore({
  reducer: {cards, card},
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
