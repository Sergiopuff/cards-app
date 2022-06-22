import {createSlice} from '@reduxjs/toolkit';
import {serverUrl} from '../../api';

const initialState = {
  object: {},
  isLoading: false,
  error: null,
};

export const blocksSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    reset: () => initialState,
    cardRequested: state => {
      state.isLoading = true;
    },
    cardSucceeded: (state, action) => {
      const {card} = action.payload;
      state.object = card;
      state.isLoading = false;
      state.error = null;
    },
    cardFailed: (state, action) => {
      state.isLoading = false;
      state.error = action.payload.error;
    },
  },
});

export const {reset, cardRequested, cardSucceeded, cardFailed} =
  blocksSlice.actions;

export default blocksSlice.reducer;

// Thunk functions
export const fetchCardById = cardId => async dispatch => {
  dispatch(cardRequested());

  await fetch(`${serverUrl}/api/cards/${cardId}`)
    .then(response => response.json())
    .then(data => dispatch(cardSucceeded(data)))
    .catch(error => dispatch(cardFailed({error})));
};
