import { createSlice } from "@reduxjs/toolkit";
import { loadState } from "../utils/storage";


const initialState = loadState('wishProduct') || {

    wishes: [],
    wishCount: 0,
    totalLike: 0,


}


const wishSlice = createSlice({
    name: "wishProduct",
    initialState,
    reducers: {
        addWish: (state1, action) => {
            return {
                ...state1,
                wishes: [...state1.wishes, {...action.payload, wishCount:1, userWish:action.payload.price}],
            }
        },

        
        removeWish: (state1, action) => {
            return {
                ...state1,
                wishes: state1.wishes.filter((item) => item.id !== action.payload),
            }
        },
        
        totalLike: (state1)=>{
            let countwish=0;
            for(let i of state1.wishes){
                countwish +=1
            };
            
            return{...state1, wishCount:countwish}
        },
    }
})
export const {removeWish, totalLike, addWish } = wishSlice.actions;
export default wishSlice.reducer;