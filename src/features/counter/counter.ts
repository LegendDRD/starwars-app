import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 1
  },
  reducers: {
    increment: state => {
      console.log(state)
      state.value++
    },
    decrement: state => {
      let temp = state.value;
      if (temp-- < 2) {
        state.value = state.value;
      } else {
        state.value--
      }
    },
    clear: state => {

      state.value = 1;

    },

  }
})

// Action creators are generated for each case reducer function
export const { increment, decrement, clear } = counterSlice.actions

export default counterSlice.reducer