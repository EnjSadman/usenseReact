"use client"

import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

export function CurrencyInput({currentInputCurrency} : {currentInputCurrency : string}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathName = usePathname();

  console.log(pathName);

  const convertingFrom = searchParams.get("currency") || process.env.NEXT_PUBLIC_BASE_CURRENCY;
  const convertingTo = searchParams.getAll("to") || process.env.NEXT_PUBLIC_BASE_CONVERSION_CURRENCY;
  const amount = searchParams.get("amount") || 0;
  
  return (
    <input
  type="text"
  value={amount}
  onChange={(event) => {
    const inputValue = event.target.value;
    const isValid = /^[0-9]*[.,]?[0-9]*$/.test(inputValue);

    if (isValid) {
      router.push(
        `currency=${convertingFrom}?amount=${inputValue}?to=${convertingTo.join("&")}`, {
          scroll: false
        }
      );
    }
  }}
  
  onKeyDown={(e) => {
    const allowedKeys = [
      "Backspace",
      "Delete",
      "ArrowLeft",
      "ArrowRight",
      "Tab",
      ".",
      ",",
    ];
    if (
      !/[0-9]/.test(e.key) &&
      !allowedKeys.includes(e.key)
    ) {
      e.preventDefault(); 
    }
  }}
/>
  )
}