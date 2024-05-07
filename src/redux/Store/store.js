import { configureStore } from '@reduxjs/toolkit'
import ThemeReducer from '../Reducer/Themereducer/ThemeReducer'


export const store = configureStore({
  reducer: {
    themes: ThemeReducer,
  },
})