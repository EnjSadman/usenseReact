"use client"

import { useSelector } from "react-redux"
import { RootState } from "../store/store"
import { findCoef } from "../lib/findCoef";
import Flag from "react-world-flags";

const FROM_CURRENCY = "UAH";

export function HeaderCurrency ({currency} : {currency : string}) {
  const { countryCurrency } = useSelector((state : RootState) => state.countryCurrencyReducer);

  const from = countryCurrency.find(el => el.currencyName === FROM_CURRENCY) 
  const to = countryCurrency.find(el => el.currencyName === currency)

  const coef = findCoef(from?.exchangeRate || 1, to?.exchangeRate || 1)

  return (
    <div className="flex gap-4 items-center">
      <Flag 
        className="w-4 h-4"
        code={(to?.currencyName === "USD") ? "us" : to?.countryName[0]}
      />
      <p className="underline text-xl">{((from?.exchangeRate || 1)/ coef).toFixed(2)} {from?.currencyName} {from?.currencySymbol}</p>
    </div>
  )
}