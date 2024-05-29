import { useMockRequest } from './useMockRequest'
import { useMemo } from 'react'
import { filterCurrencies, filterRequiredCurrencyData } from '../utils'
import { currencyResponse } from '../mocks'

export type ExchangeRate = {
  buy: number
  middle: number
  sell: number
}
export type Currency = {
  currency: string
  precision: number
  nameI18N?: string
  exchangeRate?: ExchangeRate
}

export type Response = {
  fx: Currency[]
}

export function useCurrencies(search?: string) {
  const { data, loading, error } = useMockRequest<Response>(currencyResponse)

  const results = useMemo(() => {
    return filterCurrencies(search, filterRequiredCurrencyData(data?.fx))
  }, [search, data?.fx])
  return { data: results, loading, error }
}
