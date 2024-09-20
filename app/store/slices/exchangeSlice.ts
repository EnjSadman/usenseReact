import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import _ from "lodash";

interface initial {
  currencyAmount: number,
  currencyFrom: string,
  currencyTo: string[]
}

interface changeCurrency {
  index: number,
  value: string
}


const initialState : initial = {
  currencyAmount: 1,
  currencyFrom: process.env.NEXT_PUBLIC_BASE_CURRENCY || "UAH",
  currencyTo: process.env.NEXT_PUBLIC_BASE_CONVERSION_CURRENCY?.split(",") || ["USD"]
}

const exchangeSlice = createSlice({
  name: "exchange",
  initialState,
  reducers: {
    changeCurrencyFrom: (state, action) => {
      state.currencyFrom = action.payload;
    },
    changeCurrencyTo: (state, action: PayloadAction <changeCurrency>) => {
        const temp = _.cloneDeep(state.currencyTo);
        temp[action.payload.index] = action.payload.value;
        state.currencyTo = _.cloneDeep(temp);
    },
    setCurrencyAmount: (state, action : PayloadAction<number>) => {
      state.currencyAmount = action.payload
    }
  }
})

export default exchangeSlice.reducer;

export const { changeCurrencyTo, setCurrencyAmount, changeCurrencyFrom } = exchangeSlice.actions; 