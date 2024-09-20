"use client"

import { Country, CurrencyData } from "../utils/types";
import { useInitializeReduxData } from "../hooks/initializeReduxData";
import { CurrencySelectWrapper } from "./currencySelectWrapper";

interface Props {
  currencyData: CurrencyData & Record<string, string | number | boolean | object>;
  countriesData: Country[];
  errorInfo: boolean;
}


export function Main({ currencyData, countriesData, errorInfo } : Props) {
  useInitializeReduxData({currencyData, countriesData});

  return (
    <main>
      <div className="container mx-auto flex flex-col align-middle">
        {
          (!errorInfo) 
          ? (
            <>
              <CurrencySelectWrapper />
            </>
            )
          : <h1>Something went wrong :c</h1>
        }
      </div>
    </main>
  )
}