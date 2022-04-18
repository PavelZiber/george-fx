import { GeRow, GeColumn, GeImage } from '../../ui'
import { CURRENCY_TO_COUNTRY_MAP } from '../../constants';
import { formatNumber } from '../../utils';
import type { Currency }  from '../../api'

type CurrencyRowProps = Pick<Currency, 'currency' | 'nameI18N' | 'exchangeRate'>

export const CurrencyRow = ({ currency, nameI18N, exchangeRate }: CurrencyRowProps) => (
  <GeRow key={currency} data-testid={`currency-row-${currency}`}>
    <GeColumn>
      <GeImage src={`/flags/${CURRENCY_TO_COUNTRY_MAP[currency]}.png`} alt={''} />
    </GeColumn>
    <GeColumn>
      {currency}&nbsp;({nameI18N})
    </GeColumn>
    <GeColumn>{formatNumber(exchangeRate?.buy)} EUR</GeColumn>
  </GeRow>
)
