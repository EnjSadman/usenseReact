import { configureStore } from '@reduxjs/toolkit'
import currencyReducer from './slices/currencySlice'
import countryReducer from './slices/countrySlice'
import exchangeReducer from './slices/exchangeSlice'

export const makeStore = () => {
  return configureStore({
    reducer: {
      currencyReducer,
      countryReducer,
      exchangeReducer
    }
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']