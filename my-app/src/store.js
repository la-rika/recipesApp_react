import {configureStore} from '@reduxjs/toolkit'
import filters from './redux/reducers/filters'

const store = configureStore({
    reducer:{
        filters: filters
    }
})

export default store;