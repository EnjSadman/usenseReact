"use client"

import { useDispatch } from "react-redux"
import { Country, countryCurrencyObject, Currency, CurrencyData } from "../utils/types";
import { initializeCountryCurrency } from "../store/slices/countryCurrencySlice";

interface Props {
  currencyData: CurrencyData,
  countriesData: Country[]
}

export function useInitializeReduxData({currencyData, countriesData} : Props) {
  const dispatch = useDispatch();
  const resultingArray = [];

  for (const key in currencyData.conversion_rates) {
    const countryObject : countryCurrencyObject = {
      countryName: [],
      exchangeRate: currencyData.conversion_rates[key],
      currencyName: key,
      currencySymbol: ""
    }
    const country = countriesData.find(el => el.currencies && Object.hasOwn(el.currencies, key))
    const currency = country?.currencies[key];

    if (currency && typeof currency === 'object' && 'symbol' in currency) {
      countryObject.currencySymbol = (currency as Currency).symbol;
    }

   countryObject.countryName = countriesData.filter(el => {
      if (typeof el.currencies === "object") {
        return Object.hasOwn(el.currencies, key);
      } 
    })
    .map(el => el.cca2); 

  resultingArray.push(countryObject)
  }

  dispatch(initializeCountryCurrency(resultingArray));
}