import { createSlice } from "@reduxjs/toolkit";

type CurrencyObject = Record<string, string>;

interface initial {
  currencyRates : CurrencyObject,
}

const initialState : initial = {
  currencyRates: {}
}

const currencySlice = createSlice({
  name: "currency",
  initialState,
  reducers: {
    initializeCurrency: (state, action) => {
      state.currencyRates = {...action.payload}
    }
  }
});

export default currencySlice.reducer;

export const { initializeCurrency } = currencySlice.actions;