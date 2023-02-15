import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";




// Initial state
const initialState = {
  places: [
    {id:1, namePlace: 'Tbilisi', active: true},
    {id:2, namePlace: 'Bakuriani', active: false},
    {id:3, namePlace: 'Kazbegi', active: false}
  ],
  person: [
    {id:1, countPerson: '01 Male', active: true},
    {id:2, countPerson: '02 Male', active: false},
    {id:3, countPerson: '03 Male', active: false},
    {id:4, countPerson: '04 Male', active: false},
    {id:5, countPerson: '05 Male', active: false},
    {id:6, countPerson: '06 Male', active: false},
    {id:7, countPerson: '07 Male', active: false},
    {id:8, countPerson: '08 Male', active: false},
  ],
  checkIn: ``,
  checkOut: ``,
};

// Actual Slice
export const tripSelects = createSlice({
  name: "Trip Selects",
  initialState,
  reducers: {

  
    setPlacesChange(state, action) {
      state = {...state, places: state.places.map(e=>e.id === action.payload.id ? {...e, active: true} : {...e, active: false})}
    },
    setPersonChange(state, action) {
      state = {...state, person: state.person.map(e=>e.id === action.payload.id ? {...e, active: true} : {...e, active: false})}
    },
    setCheckInChange(state, action) {
      state.checkIn = action.payload.text
    },
    setCheckOutChange(state, action) {
      state.checkOut = action.payload.text
    },
    // Special reducer for hydrating the state. Special case for next-redux-wrapper
    extraReducers: {
      [HYDRATE]: (state, action) => {
        return {
          ...state,
          ...action.payload,
        };
      },
    },

  },
});


export const { setPlacesChange, setPersonChange, setCheckInChange, setCheckOutChange } = tripSelects.actions;

export const selectTripSelectsState = (state) => state.tripSelects;
export default tripSelects.reducer;