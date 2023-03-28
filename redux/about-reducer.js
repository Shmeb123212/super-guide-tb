import { createSlice } from "@reduxjs/toolkit"
import { HYDRATE } from "next-redux-wrapper"

const initialState = {
    pageText: `As a travel guide company in Georgia, we are passionate about sharing the beauty and culture of our country with visitors from around the world. We strive to provide personalized and authentic travel experiences that allow our guests to truly immerse themselves in Georgian culture.__One of the highlights of our tour offerings is our exploration of Tbilisi, the vibrant capital city of Georgia. We take visitors on a journey through the city's winding streets and hidden alleyways, introducing them to the fascinating history and unique architecture that define the city. From the ancient Narikala Fortress to the stunning Tsminda Sameba Cathedral, we make sure our guests experience the best of what Tbilisi has to offer.__But our tours don't stop there. We also take visitors to the beautiful wine region of Kakheti, where they can sample some of the finest wines in the world and explore the lush vineyards that produce them. And for those who love nature, we offer tours of the breathtaking Caucasus Mountains, where guests can hike through pristine forests and take in the stunning vistas that surround them.__One thing that sets our company apart is our commitment to responsible tourism. We work closely with local communities to ensure that our tours benefit both our guests and the people of Georgia. We believe that sustainable tourism is the key to preserving our country's natural and cultural heritage for generations to come.__In conclusion, we are proud to offer unique and unforgettable travel experiences in Georgia. Whether you're interested in history, culture, nature, or wine, we have a tour that will exceed your expectations and leave you with memories to last a lifetime.1`,
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