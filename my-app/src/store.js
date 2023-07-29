import {configureStore} from '@reduxjs/toolkit'
import filtersReducer from './redux/slices/filters'

export const store = configureStore({
    reducer:{
        filters: filtersReducer.reducer,
    }
})