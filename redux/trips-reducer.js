import { createSlice } from "@reduxjs/toolkit"
import { HYDRATE } from "next-redux-wrapper"



const initialState = {
    mainPage: [
        {id:1, days: '10', namePlace: 'Tbilisi', priceCounter: 85, img: '/img/dest-1.jpg'},
        {id:2, days: '10', namePlace: 'Bakuriani', priceCounter: 70, img: '/img/dest-1.jpg'},
        {id:3, days: '10', namePlace: 'Kazbegi', priceCounter: 75, img: '/img/dest-1.jpg'},
    ],
    tripsPage: [
        {id:1, days: '10', namePlace: 'Tbilisi', priceCounter: 85, img: '/img/dest-1.jpg'},
        {id:2, days: '10', namePlace: 'Bakuriani', priceCounter: 70, img: '/img/dest-1.jpg'},
        {id:3, days: '10', namePlace: 'Kazbegi', priceCounter: 75, img: '/img/dest-1.jpg'},
        {id:4, days: '10', namePlace: 'Batumi', priceCounter: 85, img: '/img/dest-1.jpg'},
        {id:5, days: '10', namePlace: 'Gadauri', priceCounter: 75, img: '/img/dest-1.jpg'},
        {id:6, days: '10', namePlace: 'Borjomi', priceCounter: 70, img: '/img/dest-1.jpg'},
    ]
}


export const TripsReducer = createSlice({
    name: 'Trips',
    initialState,
    reducers: {

        setDaysTripsPage(state, action) {
            state = {...state, [state.tripsPage]: state.tripsPage.map(e=>{return {...e, days: action.payload.day}})};
        },

        // extra
        extraReducers: {
            [HYDRATE]: (state, action) => {
                return {
                    ...state,
                    ...action.payload,
                }
            }
        }
    }
})

export const {setDaysTripsPage}  = TripsReducer.actions

export const tripsReducerState = (state)=>state.TripsReducer;
export default TripsReducer.reducer
