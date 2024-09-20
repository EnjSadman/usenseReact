import { Header } from "./components/header";
import { Main } from "./components/main";
import { Country } from "./utils/types";
import StoreProvider from "./StoreProvider";

const MONO_API = "https://v6.exchangerate-api.com/v6/07644e766c705c511537d423/latest/UAH";
const COUNTRIES_API = "https://restcountries.com/v3.1/currency/"

export default async function Home() {
  let currencyData;
  let countriesData : Country[] = [];
  let errorInfo = false;
  const countriesPromises = [];

  try {
    const currencyRes = await fetch(MONO_API);
    currencyData = await currencyRes.json();
  } catch (error) {
    errorInfo = true;
    console.log(error);
  }

  if (!errorInfo) {
    for (const key in currencyData.conversion_rates) {
      const fetchRequest = fetch(`${COUNTRIES_API}${key}`)
      .then(res => res.json());
      countriesPromises.push(fetchRequest);
    }
  }

  await Promise.all(countriesPromises)
  .then(responses => {
    countriesData = [...responses].flat();
  })

  return (
    <>
      <StoreProvider>
        <Header />
        <Main currencyData={currencyData} countriesData={countriesData} errorInfo={errorInfo}/>
      </StoreProvider>
    </>
  );
}
