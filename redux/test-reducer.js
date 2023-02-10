import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";




// Initial state
const initialState = {
    testValue: false,
};

// Actual Slice
export const test = createSlice({
  name: "test",
  initialState,
  reducers: {

    // Action to set the authentication status
    setTestState(state, action) {
      state.testValue = action.payload;
    },

    // Special reducer for hydrating the state. Special case for next-redux-wrapper
    extraReducers: {
      [HYDRATE]: (state, action) => {
        return {
          ...state,
          ...action.payload.test,
        };
      },
    },

  },
});

export const { setTestState } = test.actions;

export const selectTestState = (state) => state.test;
export default test.reducer;