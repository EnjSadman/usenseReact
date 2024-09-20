"use client"

import { useSelector } from "react-redux"
import { RootState } from "../store/store"
import Flag from "react-world-flags"
import { CurrencySelect } from "./currencySelect"
import { CurrencyInput } from "./currencyInput"

export function CurrencySelectWrapper() {
  const { countryCurrency } = useSelector((state : RootState) => state.countryCurrencyReducer);
  const { currencyFrom, currencyTo } = useSelector((state : RootState) => state.exchangeReducer);

  const defaultCurrency = countryCurrency.find(el => el.currencyName === currencyFrom);

  return (
    <div className="container mx-auto grid grid-cols-4">
    <CurrencySelect
      currencyName={defaultCurrency?.currencyName || ""}
      currencySymbol={defaultCurrency?.currencySymbol || ""}
      currencyFlags={defaultCurrency?.countryName || []}
      index={-1}  />
    <CurrencyInput currentInputCurrency={defaultCurrency?.currencyName || ""} />
      {
        currencyTo.map((el, index)=> {
          const country = countryCurrency.find(element => element.currencyName === el)
          return (
            <>
              <CurrencySelect
                currencyName={country?.currencyName || ""}
                currencySymbol={country?.currencySymbol || ""}
                currencyFlags={country?.countryName || [""]}
                index={index + 1}
              />
              <CurrencyInput currentInputCurrency={country?.currencyName || ""} />
          </>
          
        )})
      }
    </div>
  )
}