import {configureStore} from '@reduxjs/toolkit'
import { filtersSlice } from './redux/reducers/filters';

const store = configureStore({
    reducer:{
        filters: filtersSlice.reducer
    }
})

export default store;