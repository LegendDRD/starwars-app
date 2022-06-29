import { createSlice } from '@reduxjs/toolkit'

export const searchCharacter = createSlice({
  name: 'search',
  initialState: {
    value: ""
  },
  reducers: {
    store: (state, action) => {
      state.value = action.payload
    },
    clearCache: (state) => {
      state.value = ""
    }
  }
})

// Action creators are generated for each case reducer function
export const { store, clearCache } = searchCharacter.actions

export default searchCharacter.reducer