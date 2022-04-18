import { useGetRequest } from './useGetRequest'
import { useMemo } from 'react'
import { filterCurrencies, filterRequiredCurrencyData } from '../utils'
const API_URL = 'https://run.mocky.io/v3/c88db14a-3128-4fbd-af74-1371c5bb0343'

export type ExchangeRate = {
  buy: number
  middle: number
  sell: number
}
export type Currency = {
  currency: string
  precision: number
  nameI18N: string
  exchangeRate: ExchangeRate
}

type Response = {
  fx: Currency[]
}

export function useCurrencies(search?: string) {
  const { data, loading, error } = useGetRequest<Response>(API_URL)

  const results = useMemo(() => {
    return filterCurrencies(search, filterRequiredCurrencyData(data?.fx))
  }, [search, data?.fx])

  return { data: results, loading, error }
}
