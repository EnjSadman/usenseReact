"use client"

import { useSearchParams } from "next/navigation"
import { useRouter } from "next/navigation";
import { CurrencyInput } from "./currencyInput";
import Flag from "react-world-flags";

interface Props {
  currencyName: string,
  currencySymbol: string,
  currencyFlags: string[],
}

export function CurrencySelect ({currencyName, currencySymbol, currencyFlags} : Props) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const convertingFrom = searchParams.get("currency") || process.env.NEXT_PUBLIC_BASE_CURRENCY;
  const amount = searchParams.get("amount") || 0;
  return (
    <div>
      {
        currencyFlags.map(el => (
          <Flag code={el} />
        ))
      }
      {currencyName}
      {currencySymbol}
      <CurrencyInput currentInputCurrency={currencyName}/>
    </div>
  )
}