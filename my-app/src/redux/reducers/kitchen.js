import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    newCourse:{
        mainCourse:[],
        secondCourse:[],
        sideDish:'',
        creationDate:''
    }
}

const kitchenSlice = createSlice({
    name: 'kitchen',
    initialState,
    reducers:{
        newCourseAdd: (state,action)=>{
            state.newCourse = action.payload
        }
    }
})

export const {newCourseAdd} = kitchenSlice.actions;
export default kitchenSlice.reducer;