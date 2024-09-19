"use client"

import { CurrencyInput } from "./currencyInput";
import Flag from "react-world-flags";

interface Props {
  currencyName: string,
  currencySymbol: string,
  currencyFlags: string[],
  index: number,
}

export function CurrencySelect ({currencyName, currencySymbol, currencyFlags, index} : Props) {



  return (
    <div className="border-1 border-black rounded-sm">
      {
        currencyFlags.map(el => <Flag code={el || ""} className="w-4 h-4"/>)
      }   
      {`${currencyName} ${currencySymbol}`}
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9999 13.9394L17.4696 8.46973L18.5303 9.53039L11.9999 16.0607L5.46961 9.53039L6.53027 8.46973L11.9999 13.9394Z" fill="#000000"></path> </g></svg>
    </div>
  )
}
