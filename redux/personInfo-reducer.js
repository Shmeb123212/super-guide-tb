import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";


const initialState = {
    checkIn: '',
    checkOut: '',
    countOfPeople: '',
    place: '',
    phoneNumber: '',
    namePerson: '',
    tariff: ''
}


export const personInfoReducer = createSlice({
    name: "Person info",
    initialState,
    reducers: {
  
     setTariffInfo(state, action) {
        state.tariff = action.payload.tariff
    }, 
    setPhoneNumberInfo(state, action) {
        state.phoneNumber = action.payload.phoneNumber
    }, 
    setNamePersonInfo(state, action) {
        state.namePerson = action.payload.namePerson
    },
    setPlaceInfo(state, action) {
        state.place = action.payload.place
    },
    setPersonInfo(state, action) {
        state.countOfPeople = action.payload.countOfPeople
    },
    setCheckInInfo(state, action) {
        state.checkIn = action.payload.checkIn
    },
    setCheckOutInfo(state, action) {
        state.checkOut = action.payload.checkOut
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
  
  
  export const { setCheckOutInfo,setCheckInInfo,setPersonInfo,setPlaceInfo,setNamePersonInfo,setPhoneNumberInfo,setTariffInfo  } = personInfoReducer.actions;
  
  export const selectTripSelectsState = (state) => state.personInfoReducer;
  export default personInfoReducer.reducer;