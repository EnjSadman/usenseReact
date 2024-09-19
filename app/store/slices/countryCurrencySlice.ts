import { countryCurrencyObject } from "@/app/utils/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import _ from 'lodash';

interface initial {
  countryCurrency : countryCurrencyObject[],
}

const initialState : initial = {
  countryCurrency: []
}

const countryCurrencySlice = createSlice({
  name: "countryCurrency",
  initialState,
  reducers: {
    initializeCountryCurrency: (state, action : PayloadAction<countryCurrencyObject[]>) => {
      state.countryCurrency = _.cloneDeep(action.payload)
    }
  }
});

export default countryCurrencySlice.reducer;

export const { initializeCountryCurrency } = countryCurrencySlice.actions;