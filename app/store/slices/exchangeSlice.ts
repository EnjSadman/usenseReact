import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface initial {
  currencyAmount: number,
  currencyFrom: string,
  currencyTo: string[]
}


const initialState : initial = {
  currencyAmount: 0,
  currencyFrom: process.env.NEXT_PUBLIC_BASE_CURRENCY || "UAH",
  currencyTo: process.env.NEXT_PUBLIC_BASE_CONVERSION_CURRENCY?.split(",") || ["USD"]
}

const exchangeSlice = createSlice({
  name: "exchange",
  initialState,
  reducers: {
    setCurrencyFrom: (state, action : PayloadAction<string>) => {
      state.currencyFrom = action.payload
    },
    setCurrencyTo: (state, action) => {
      state.currencyTo = [...state.currencyTo, action.payload]
    },
    setCurrencyAmount: (state, action : PayloadAction<number>) => {
      state.currencyAmount = action.payload
    }
  }
})

export default exchangeSlice.reducer;

export const { setCurrencyFrom, setCurrencyTo, setCurrencyAmount } = exchangeSlice.actions; 