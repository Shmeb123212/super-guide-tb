import { createSlice } from "@reduxjs/toolkit"
import { HYDRATE } from "next-redux-wrapper"

const initialState = {
    pageText: 'Super Guide specializing in tours to Georgia, where you can experience the breathtaking beauty of the Caucasus Mountains and the stunning natural landscapes of this beautiful country. Our expert guides will take you on unforgettable journeys to explore the rugged terrain of the region, with its vast green valleys, crystal-clear lakes, and snow-capped peaks. Discover the pristine nature of Georgia as you hike through the lush forests, explore the enchanting waterfalls, and spot unique wildlife. Whether you are a thrill-seeker or a nature lover, our tours are tailored to meet your specific needs and desires. Come and discover the hidden gems of Georgia with us! Super Guide specializing in tours to Georgia, where you can experience the breathtaking beauty of the Caucasus Mountains and the stunning natural landscapes of this beautiful country. Our expert guides will take you on unforgettable journeys to explore the rugged terrain of the region, with its vast green valleys, crystal-clear lakes, and snow-capped peaks. Discover the pristine nature of Georgia as you hike through the lush forests, explore the enchanting waterfalls, and spot unique wildlife. Whether you are a thrill-seeker or a nature lover, our tours are tailored to meet your specific needs and desires. Come and discover the hidden gems of Georgia with us!',
    mainText: 'Super Guide specializing in tours to Georgia, where you can experience the breathtaking beauty of the Caucasus Mountains and the stunning natural landscapes of this beautiful country. Our expert guides will take you on unforgettable journeys to explore the rugged terrain of the region, with its vast green valleys, crystal-clear lakes, and snow-capped peaks. Discover the pristine nature of Georgia as you hike through the lush forests, explore the enchanting waterfalls, and spot unique wildlife. Whether you are a thrill-seeker or a nature lover, our tours are tailored to meet your specific needs and desires. Come and discover the hidden gems of Georgia with us!',
}


export const aboutReducer = createSlice({
    name: 'About',
    initialState,
    reducers: {
        setPageText(state, action) {
            state.pageText = action.payload.text
        },
        setMainText(state, action) {
            state.mainText = action.payload.text
        },
        // extra
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



export const {setMainText, setPageText} = aboutReducer.actions;
export const aboutState = (state)=>state.aboutReducer;
export default aboutReducer.reducer