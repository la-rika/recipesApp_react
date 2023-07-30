import { createSlice } from '@reduxjs/toolkit' 

const initialState={
    dropDownFilter:'',
}

export const filtersSlice = createSlice({
    name:'filters',
    initialState,
    reducers:{
        dropDownFilterAdd: (state, action) =>{
            state.dropDownFilter = action.payload
        }
    },
})

export const {dropDownFilterAdd, increase} = filtersSlice.actions
export default filtersSlice.reducer 