import {createSlice} from '@reduxjs/toolkit';
import forEach from 'lodash/forEach';
import {serverUrl} from '../../api';
import concat from 'lodash/concat';

const initialState = {
  collection: [],
  meta: {},
  selected: {},
  params: {
    search: '',
    page: 1,
    per: 10,
  },
  isLoading: false,
  error: null,
};

export const blocksSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    reset: () => initialState,
    cardsRequested: (state, action) => {
      state.isLoading = true;
      forEach(action.payload, (value, key) => {
        state.params[key] = value;
      });
    },
    cardsSucceeded: (state, action) => {
      const {cards, meta} = action.payload;
      state.collection =
        meta?.page > 1 ? concat(state.collection, cards) : cards;
      state.meta = meta;
      state.isLoading = false;
      state.error = null;
    },
    cardsFailed: (state, action) => {
      state.isLoading = false;
      state.error = action.payload.error;
    },
  },
});

export const {reset, cardsRequested, cardsSucceeded, cardsFailed} =
  blocksSlice.actions;

export default blocksSlice.reducer;

// Thunk functions
export const fetchCards = params => async dispatch => {
  const page = params?.page || initialState.params.page;
  const per = params?.per || initialState.params.per;
  const search = params?.search || initialState.params.search;

  dispatch(cardsRequested(params));

  await fetch(`${serverUrl}/api/cards?page=${page}&per=${per}&search=${search}`)
    .then(response => response.json())
    .then(data => dispatch(cardsSucceeded(data)))
    .catch(error => dispatch(cardsFailed({error})));
};
