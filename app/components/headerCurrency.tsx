"use client"

import { useSelector } from "react-redux"
import { RootState } from "../store/store"
import { useMemo } from "react";
import { findCoef } from "../lib/findCoef";
import Flag from "react-world-flags";

const FROM_CURRENCY = "UAH";

export function HeaderCurrency ({currency} : {currency : string}) {
  const { countryCurrency } = useSelector((state : RootState) => state.countryCurrencyReducer);


  const from = useMemo(() => (countryCurrency.find(el => el.currencyName === FROM_CURRENCY)), [countryCurrency]) 
  const to = useMemo(() => (countryCurrency.find(el => el.currencyName === currency)), [countryCurrency]);
  const coef = useMemo(() => (findCoef(from?.exchangeRate || 1, to?.exchangeRate || 1)), [from, to])
  return (
    <div className="flex gap-4">
      <Flag code={(to?.currencyName === "USD") ? "us" : to?.countryName[0]}/>
      <p>{coef}</p>
    </div>
  )
}