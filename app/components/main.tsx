"use client"

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initializeCoutnries } from "../store/slices/countrySlice";
import { initializeCurrency } from "../store/slices/currencySlice";
import { CurrencySelect } from "./currencySelect";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { Country } from "../utils/types";
import useInitializeRedux from "../hooks/useInitializeRedux";
import { RootState } from "../store/store";

interface Props {
  currencyData: Record<string, string | number | boolean | object>;
  countriesData: Country[];
  errorInfo: string;
}


export function Main({ currencyData, countriesData, errorInfo } : Props) {
  const dispatch = useDispatch();

  useInitializeRedux({currencyData, countriesData});

  const {currencyFrom, currencyTo, currencyAmount} = useSelector((state : RootState) => state.exchangeReducer);

  const findCurrencySymbol = (currencyName : string) : string => {
    const item = countriesData.find(el => {
      return Object.hasOwn(el, currencyName)
    });
    return (item && currencyName in item.currencies) 
    ? (item.currencies as Record<string, { symbol: string }>)[currencyName].symbol 
    : "";
  }

  const findCountryCode = (currencyName : string) : string[] => {
      const items = countriesData.filter(el => {
        return Object.hasOwn(el, currencyName);
      });
      return items.map(el => el.cca2);
  }

  return (
    <main>
      <div className="container mx-auto">
        {
          (errorInfo === "no errors") 
          ? (
            <>
              <CurrencySelect
                currencyName={currencyFrom}
                currencyFlags={findCountryCode(currencyFrom)}
                currencySymbol={findCurrencySymbol(currencyFrom)} 
              />
              {
                currencyTo.map(el => (
                  <CurrencySelect
                    currencyName={el}
                    currencyFlags={findCountryCode(el)}
                    currencySymbol={findCurrencySymbol(el)}
                  />
                )
                )
              }
            </>
            )
          : <h1>Something went wrong :c</h1>
        }
      </div>
    </main>
  )
}