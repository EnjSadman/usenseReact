import { HeaderCurrency } from "./headerCurrency"

const CURRENCIES_LIST = ["USD", "EUR"]

export function Header() {
  return(
    <header>
      <div className="flex justify-center gap-4 border-b-2 border-black bg-white mb-10">
        {
          CURRENCIES_LIST.map((el, index)=> (
            <HeaderCurrency currency={el} key={index}/>
        ))
        }
      </div>
    </header>
  )
}