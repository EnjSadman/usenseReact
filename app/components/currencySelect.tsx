"use client"

import { useDispatch, useSelector } from "react-redux";
import Flag from "react-world-flags";
import { useState } from "react";
import { RootState } from "../store/store";
import { changeCurrencyFrom, changeCurrencyTo } from "../store/slices/exchangeSlice";


interface Props {
  currencyName: string,
  currencySymbol: string,
  currencyFlags: string[],
  arrayIndex: number,
}

export function CurrencySelect ({currencyName, currencySymbol, currencyFlags, arrayIndex} : Props) {
  const dispatch = useDispatch();

  const { countryCurrency } = useSelector((state : RootState) => state.countryCurrencyReducer);
  const [selectOpen, setSelectOpen] = useState(false);

  return (
    <div>
      <div 
        className="flex flex-row items-center justify-between bg-white cursor-pointer"
        onClick={() => {
          setSelectOpen(!selectOpen);
        }}
      >
        <div>
          <Flag code={(currencyFlags.includes("US")) ? "us" : currencyFlags[0]} className="w-4 h-4"/>
          {`${currencyName} ${currencySymbol}`}
        </div>
          <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M11.9999 13.9394L17.4696 8.46973L18.5303 9.53039L11.9999 16.0607L5.46961 9.53039L6.53027 8.46973L11.9999 13.9394Z" fill="#000000"></path> </g></svg>
      </div>
      <div
        style={{"height": (selectOpen) ? "600px" : "0px"}}
        className="absolute w-40 overflow-x-hidden flex flex-col overflow-scroll transition-all ease-linear duration-100 bg-white"
      >
        {countryCurrency.map((el, index) => (
          <div
            className="border-black border-b-2 cursor-pointer hover:bg-slate-300"
            key={index}
            onClick={() => {
              setSelectOpen(!selectOpen);
              if (index === -1) {
                dispatch(changeCurrencyFrom(el))
              } else {
                dispatch(changeCurrencyTo({              
                  index: arrayIndex,
                  value: el.currencyName
                }))
              }
            }}
          >
            <Flag
              className="w-4 h-4"
              code={(el.currencyName === "USD") ? "USA" : el.countryName[0]}
            /> 
            {`${el.countryName} ${el.currencySymbol}`}
          </div>
        ))}
      </div>
    </div>
  )
}
