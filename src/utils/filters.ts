
import { Currency } from '../api'

export const filterRequiredCurrencyData = (data?: Currency[]) => {
  if(data) {
    return data.filter(({ currency, exchangeRate, nameI18N }) => currency && exchangeRate && nameI18N)
  }
  return data;
}

export const filterCurrencies = (search?: string, data?: Currency[]) => {
  if(search && data) {
    return data.filter(({ currency, nameI18N }) => (
      currency.toLowerCase().includes(search.toLowerCase()) ||
      nameI18N.toLowerCase().includes(search.toLowerCase())
    ))
  }
  return data;
}
