import {createSlice} from '@reduxjs/toolkit';

const initialState={
    carts:[],
    quantity:(localStorage.getItem("products")?.length==0 ? 0 : localStorage.getItem("products").length)
}
const cartSystem =createSlice({
    name: "user",
    initialState,
    reducers:{
        AddCart:(state,action)=>{
           
            const find= state.carts.findIndex(item=>item.name===action.payload.name)
        
            if(find>=0)
            {   
                
                state.carts[find].quantity+=1
            }
            else{
                localStorage.setItem("productsNumber",localStorage.getItem("productsNumber")>0 ?parseInt(localStorage.getItem("productsNumber"))+1 : "1")
            const tempvar= {...action.payload,quantity:1}
            state.carts.push(tempvar)
        }
    },
        EliminateItem:(state,action)=>{
            const find=state.carts.findIndex(item=>item.name==action.payload.name)
                state.carts.splice(find,find+1);
    }
        }
})

export const {AddCart,EliminateItem}=cartSystem.actions;

export default cartSystem.reducer;