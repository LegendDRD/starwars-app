import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/counter/counter';
import currentCharacterReducer from './features/counter/currentCharacterCache'
import saerchReducer from './features/counter/searchCache'


export default configureStore({
  reducer: {
    counter: counterReducer,
    currentCharacter: currentCharacterReducer,
    search: saerchReducer
  }
})
