import { createSlice } from '@reduxjs/toolkit'

const ThemeChange = createSlice({
  name: 'theme',
  initialState:{
    theme:localStorage.getItem("theme-chat")?JSON.parse(localStorage.getItem("theme-chat")):false
  },
  reducers: {
    ChangeTheme(state, action) {
     state.theme=action.payload
    },
    
  },
})

export const { ChangeTheme } = ThemeChange.actions
export default ThemeChange.reducer