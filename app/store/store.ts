import { configureStore } from '@reduxjs/toolkit'
import countryCurrencyReducer from './slices/countryCurrencySlice'
import exchangeReducer from './slices/exchangeSlice'

export const makeStore = () => {
  return configureStore({
    reducer: {
      countryCurrencyReducer,
      exchangeReducer
    }
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']