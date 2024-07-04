import { configureStore } from '@reduxjs/toolkit'
import { hospitalReducer } from './HospitalSlice'


export let store = configureStore({
    reducer:{
        hospitals:hospitalReducer

    }
})
