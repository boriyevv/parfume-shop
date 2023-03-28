import { createSlice } from "@reduxjs/toolkit";
import { loadState } from "../utils/storage";


const initialState = loadState('product') || {

    products: [],
    count: 0,
    totalprice: 0,


}


const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        addProduct: (state, action) => {
            return {
                ...state,
                products: [...state.products, {...action.payload, count:1, userPrice:action.payload.price}],
            }
        },
        
        toggleAmount:(state, action)=>{
            if(action.payload.type === 'add'){
                const newProducts = state.products.map((el)=>{
                    if(el.id==action.payload.id){
                        return{...el, count:el.count+1, userPrice:(el.count+1) * el.price}
                    }
                    return el
                });
                return{
                    ...state, products:newProducts
                };
            }
            if(action.payload.type === 'remove'){
                const newProducts = state.products.map((el)=>{
                    if(el.id==action.payload.id){
                        return{...el, count:el.count-1, userPrice:(el.count-1) * el.price}
                    }
                    return el
                });
                return{
                    ...state, products:newProducts
                };
            } 
        },
        
        removeProduct: (state, action) => {
            return {
                ...state,
                products: state.products.filter((item) => item.id !== action.payload),
            }
        },
        
        totalCount: (state)=>{
            let countProduct=0;
            // let countBadge=0
            for(let i of state.products){
                countProduct +=1
                // countBadge +=1
            };
            
            return{...state, count:countProduct}
        },
    }
})
export const {removeProduct, totalCount, addProduct, toggleAmount } = productSlice.actions;
export default productSlice.reducer;