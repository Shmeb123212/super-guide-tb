import { createSlice } from "@reduxjs/toolkit"
import { HYDRATE } from "next-redux-wrapper"


const initialState = {
    reviewsMain: [
        {id: 1, initials: 'Test Test1', imgHref: '#', userText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero eum aperiam a rerum, soluta similique totam fugit excepturi, consectetur laborum assumenda, distinctio rem nobis in debitis magni ipsam molestiae deleniti.'},
        {id: 2, initials: 'Test Test2', imgHref: '#', userText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero eum aperiam a rerum, soluta similique totam fugit excepturi, consectetur laborum assumenda, distinctio rem nobis in debitis magni ipsam molestiae deleniti.'},
    ],
    reviewsPage: [
        {id: 1, initials: 'Test Test1', imgHref: '#', userText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero eum aperiam a rerum, soluta similique totam fugit excepturi, consectetur laborum assumenda, distinctio rem nobis in debitis magni ipsam molestiae deleniti.'},
        {id: 2, initials: 'Test Test2', imgHref: '#', userText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero eum aperiam a rerum, soluta similique totam fugit excepturi, consectetur laborum assumenda, distinctio rem nobis in debitis magni ipsam molestiae deleniti.'},
        {id: 3, initials: 'Test Test3', imgHref: '#', userText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero eum aperiam a rerum, soluta similique totam fugit excepturi, consectetur laborum assumenda, distinctio rem nobis in debitis magni ipsam molestiae deleniti.'},
        {id: 4, initials: 'Test Test4', imgHref: '#', userText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero eum aperiam a rerum, soluta similique totam fugit excepturi, consectetur laborum assumenda, distinctio rem nobis in debitis magni ipsam molestiae deleniti.'},
        {id: 5, initials: 'Test Test5', imgHref: '#', userText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero eum aperiam a rerum, soluta similique totam fugit excepturi, consectetur laborum assumenda, distinctio rem nobis in debitis magni ipsam molestiae deleniti.'},
        {id: 6, initials: 'Test Test6', imgHref: '#', userText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero eum aperiam a rerum, soluta similique totam fugit excepturi, consectetur laborum assumenda, distinctio rem nobis in debitis magni ipsam molestiae deleniti.'},
    ],
}

export const reviewsReducer = createSlice({
    name: 'Reviews',
    initialState,
    reducers: {

        // extra
        extraReducers: {
            [HYDRATE]: (state, action)=>{
                return {
                    ...state,
                    ...action.payload,
                };
            },
        },
    },
});



export const {} = reviewsReducer.actions;
export const reviewsState = (state)=>state.reviewsReducer;
export default reviewsReducer.reducer;