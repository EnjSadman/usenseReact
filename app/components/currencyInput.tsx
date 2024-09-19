"use client"

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { setCurrencyAmount } from "../store/slices/exchangeSlice";

export function CurrencyInput({currentInputCurrency} : {currentInputCurrency : string}) {
  const dispatch = useDispatch();
  const {currencyFrom, currencyTo, currencyAmount} = useSelector((state : RootState) => state.exchangeReducer);
  
  return (
    <input
    type="text"
    value={currencyAmount}
    onChange={(event) => {
      const inputValue = event.target.value;
      const isValid = /^[0-9]*[.,]?[0-9]*$/.test(inputValue);

      if (isValid) {
        dispatch(setCurrencyAmount(Number(event.target.value)));
      }
    }}
/>
  )
}