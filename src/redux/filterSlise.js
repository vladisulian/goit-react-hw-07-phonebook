import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = '';

const filterSlise = createSlice(
  {
    name: 'filter',
    initialState: filterInitialState,
    reducers: {
      setFilter(state, action) {
        return (state = action.payload);
      },
    },
  }
  // export const filterReducer = createReducer(filterInitialState, {
  //   [setFilter]: (state, action) => (state = action.payload),
  // });
);

export const { setFilter } = filterSlise.actions;
export const filterReducer = filterSlise.reducer;
