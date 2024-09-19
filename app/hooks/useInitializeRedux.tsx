import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { initializeCoutnries } from "../store/slices/countrySlice";
import { initializeCurrency } from "../store/slices/currencySlice";
import { Country } from "../utils/types";

interface Props {
  currencyData: Record<string, string | number | boolean | object>;
  countriesData: Country[];
}

export default function useInitializeRedux({currencyData, countriesData}: Props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initializeCoutnries(countriesData));
    dispatch(initializeCurrency(currencyData));
  }, []);
}