import { createSlice } from "@reduxjs/toolkit";

interface initial {
  countriesList: Record<string, string | number | boolean | object>[];
}

const initialState : initial = {
  countriesList: [],
} 

const countrySlice = createSlice({
  name: "countries",
  initialState,
  reducers: {
    initializeCoutnries:(state, action) => {
      state.countriesList = [...action.payload]
    }
  }
})

export default countrySlice.reducer

export const { initializeCoutnries } = countrySlice.actions;