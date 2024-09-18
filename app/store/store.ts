import { configureStore } from '@reduxjs/toolkit'
import currencyReducer from './slices/currencySlice'
import countryReducer from './slices/countrySlice'

export const makeStore = () => {
  return configureStore({
    reducer: {
      currencyReducer,
      countryReducer
    }
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']