import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    dropDownFilter:''
}

const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers:{
        dropDownFilterAdd: (state,action) =>{
            state.dropDownFilter = action.payload
        },
        dropDownFilterReset: (state) =>{
            state.dropDownFilter = ''
        }
    }
})

export const {dropDownFilterAdd, dropDownFilterReset} = filtersSlice.actions;
export default filtersSlice.reducer;