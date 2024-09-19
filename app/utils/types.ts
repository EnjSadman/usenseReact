export type Currency = {
  symbol: string
}

export type Country = {
  currencies: Record<string, Currency | number | boolean | object>;
  cca2: string
}