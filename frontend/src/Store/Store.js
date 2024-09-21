import {configureStore} from '@reduxjs/toolkit'
import reducers from './Reducers'

const Store=configureStore({
    reducer:{
        auth: reducers
    }
})
export default Store;