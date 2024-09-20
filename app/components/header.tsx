import { HeaderCurrency } from "./headerCurrency"

const CURRENCIES_LIST = ["USD", "EUR"]

export function Header() {
  return(
    <header>
      <div className="flex justify-between">
        {
          CURRENCIES_LIST.map(el => (<HeaderCurrency currency={el}/>))
        }
      </div>
    </header>
  )
}