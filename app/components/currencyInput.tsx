"use client"

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { setCurrencyAmount } from "../store/slices/exchangeSlice";
import { findCoef } from "../lib/findCoef";

export function CurrencyInput({currentInputCurrency} : {currentInputCurrency : string}) {
  const dispatch = useDispatch();
  const {currencyFrom, currencyAmount} = useSelector((state : RootState) => state.exchangeReducer);
  const { countryCurrency } = useSelector((state : RootState) => state.countryCurrencyReducer);
  const rateFrom = countryCurrency.find(el => el.currencyName === currencyFrom)?.exchangeRate || 1;
  const rateTo = countryCurrency.find(el => el.currencyName === currentInputCurrency)?.exchangeRate || 1;

  return (
    <input
    type="text"
    className="border-black border-2"
    value={(currencyAmount) ? (currencyAmount * findCoef(rateFrom, rateTo)).toFixed(2) : ""}
    onChange={(event) => {
      const inputValue = event.target.value;
      const isValid = /[0-9]/.test(inputValue);

      if (isValid && currentInputCurrency === currencyFrom) {
        dispatch(setCurrencyAmount(Number(event.target.value)));
      } else {
        dispatch(setCurrencyAmount((Number(event.target.value) / findCoef(rateFrom, rateTo))));
      }
    }}
/>
  )
}