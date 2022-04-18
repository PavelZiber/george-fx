import { useGetRequest } from './useGetRequest'
import { useMemo } from 'react'
import { filterCurrencies, filterRequiredCurrencyData } from '../utils'
import { API_URL } from '../constants'

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

export type Response = {
  fx: Currency[]
}

export function useCurrencies(search?: string) {
  const { data, loading, error } = useGetRequest<Response>(API_URL)

  const results = useMemo(() => {
    return filterCurrencies(search, filterRequiredCurrencyData(data?.fx))
  }, [search, data?.fx])
  return { data: results, loading, error }
}
