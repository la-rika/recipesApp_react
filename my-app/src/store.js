import {configureStore} from '@reduxjs/toolkit'
import rootReducer from './redux/reducers/index'
import { filtersSlice } from './redux/reducers/filters';

const store = configureStore({
    reducer:{rootReducer}
})

export default store;