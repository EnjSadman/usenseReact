"use client"

import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../store/store"
import { CurrencySelect } from "./currencySelect"
import { CurrencyInput } from "./currencyInput"
import { deleteExchanger } from "../store/slices/exchangeSlice"
import React from "react"

export function CurrencySelectWrapper() {
  const dispatch = useDispatch();
  const { countryCurrency } = useSelector((state : RootState) => state.countryCurrencyReducer);
  const { currencyFrom, currencyTo } = useSelector((state : RootState) => state.exchangeReducer);

  const defaultCurrency = countryCurrency.find(el => el.currencyName === currencyFrom);

  return (
    <div className="container mx-auto grid grid-cols-2 relative gap-4">
      <div className="grid grid-cols-2">
      <CurrencySelect
        currencyName={defaultCurrency?.currencyName || ""}
        currencySymbol={defaultCurrency?.currencySymbol || ""}
        currencyFlags={defaultCurrency?.countryName || []}
        arrayIndex={-1}  />
      <CurrencyInput currentInputCurrency={defaultCurrency?.currencyName || ""} />
      </div>
      {
        currencyTo.map((el, index)=> {
          const country = countryCurrency.find(element => element.currencyName === el)
          return (
            <div key={index} className="grid grid-cols-2 relative">
                <CurrencySelect
                  currencyName={country?.currencyName || ""}
                  currencySymbol={country?.currencySymbol || ""}
                  currencyFlags={country?.countryName || [""]}
                  arrayIndex={index}
                />
                <CurrencyInput currentInputCurrency={country?.currencyName || ""} />
              {
                (index !== 0)
                ? (
                  <svg 
                    className="w-4 h-4 cursor-pointer absolute right-0 top-3"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={() => {
                      dispatch(deleteExchanger(index));
                    }}
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                      <path d="M10 12L14 16M14 12L10 16M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6M18 6V16.2C18 17.8802 18 18.7202 17.673 19.362C17.3854 19.9265 16.9265 20.3854 16.362 20.673C15.7202 21 14.8802 21 13.2 21H10.8C9.11984 21 8.27976 21 7.63803 20.673C7.07354 20.3854 6.6146 19.9265 6.32698 19.362C6 18.7202 6 17.8802 6 16.2V6" stroke="#ff0000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                    </g>
                  </svg>
                )
                : null
              }
          </div>
          
        )})
      }
    </div>
  )
}