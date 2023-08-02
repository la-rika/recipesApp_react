import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mainCourse:[],
    secondCourse:[],
    sideDish:''
}

const kitchenSlice = createSlice({
    name: 'kitchen',
    initialState,
    reducers:{
        mainCourseAdd :(state,action)=>{
            state.mainCourse.push(action.payload);
        },
        secondCourseAdd :(state,action)=>{
            state.secondCourse.push(action.payload);
        },
        sideDishAdd :(state,action)=>{
            state.sideDish = action.payload;
        }
    }
})

export const {mainCourseAdd, secondCourseAdd,sideDishAdd} = kitchenSlice.actions;
export default kitchenSlice.reducer;