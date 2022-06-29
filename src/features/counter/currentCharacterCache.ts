import { createSlice } from '@reduxjs/toolkit'

export const currentCharacter = createSlice({
  name: 'currentCharacter',
  initialState: {
    value: {}
  },
  reducers: {
    current: (state, action) => {
      state.value = action.payload
    },
    clear: (state) => {
      state.value = {}
    }
  }
})

export const { current, clear } = currentCharacter.actions

export default currentCharacter.reducer