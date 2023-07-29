import { createSlice } from "@reduxjs/toolkit";

const initialState={
    dropDownFilter: ''
}


export const filtersReducer = createSlice({
    name: 'filters',
    initialState,
    reducers:{
        dropDownFilterAdd: (state, action)=>{
            state.dropDownFilter = action.payload
        }
    }
})

export const {dropDownFilterAdd} = filtersReducer.actions;
export default filtersReducer.reducer;