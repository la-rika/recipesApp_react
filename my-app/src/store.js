import {configureStore} from '@reduxjs/toolkit'
import kitchen from './redux/reducers/kitchen';
import filters from './redux/reducers/filters'

const store = configureStore({
    reducer:{
        filters: filters,
        kitchen: kitchen
    }
})

export default store;