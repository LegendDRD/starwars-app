import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/counter/counter';
import currentCharacterReducer from './features/counter/currentCharacterCache'

export default configureStore({
  reducer: {
    counter: counterReducer,
    currentCharacter: currentCharacterReducer
  }
})
