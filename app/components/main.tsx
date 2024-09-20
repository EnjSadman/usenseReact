"use client"

import { Country, CurrencyData } from "../utils/types";
import { useInitializeReduxData } from "../hooks/initializeReduxData";
import { CurrencySelectWrapper } from "./currencySelectWrapper";
import { useDispatch } from "react-redux";
import { addNewExchanger } from "../store/slices/exchangeSlice";

interface Props {
  currencyData: CurrencyData & Record<string, string | number | boolean | object>;
  countriesData: Country[];
  errorInfo: boolean;
}


export function Main({ currencyData, countriesData, errorInfo } : Props) {
  const dispatch = useDispatch();

  useInitializeReduxData({currencyData, countriesData});

  return (
    <main>
      <div className="container mx-auto flex flex-col align-middle gap-10">
        {
          (!errorInfo) 
          ? (
            <>
              <CurrencySelectWrapper />
              <button
                className="h-10 w-30 bg-blue-500 text-white hover:bg-blue-700"
                onClick={() => {
                  dispatch(addNewExchanger());
                }}
              >
                Add another converter
              </button>
            </>
            )
          : <h1>Something went wrong :c</h1>
        }
      </div>
    </main>
  )
}