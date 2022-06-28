import { createSlice } from '@reduxjs/toolkit'

export const currentCharacter = createSlice({
  name: 'currentCharacter',
  initialState: {
    value: {}
  },
  reducers: {
    current: (state, action) => {
      console.log();
      state.value = action.payload
    },
    clear: (state) => {
      state.value = {}
    }
  }
})

// Action creators are generated for each case reducer function
export const { current, clear } = currentCharacter.actions

export default currentCharacter.reducer