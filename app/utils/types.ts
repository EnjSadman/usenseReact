export type CurrencyData = {
  conversion_rates: Record<string, number>;
}

export type countryCurrencyObject = {
  countryName: string[],
  exchangeRate: number,
  currencyName: string,
  currencySymbol: string,
};

export type Currency = {
  symbol: string
}

export type Country = {
  currencies: Record<string, Currency | number | boolean | object>;
  cca2: string
}