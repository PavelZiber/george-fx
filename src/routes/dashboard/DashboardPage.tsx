import { useCurrencies } from '../../api'
import styled from 'styled-components'
import { useCallback, ChangeEvent } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { GeFlex, GePage, GeLoader, GeInput, GeErrorMessage } from '../../ui'
import type { Currency }  from '../../api'
import { CurrencyRow } from './CurrencyRow'

const Input = styled(GeInput)`
  width: 300px;
  height: 40px;
  font-size: 18px;
`

const GeList = styled(GeFlex)`
  align-items: center;
  flex-direction: column;
`

const GeListMessage = styled(GeFlex)`
  align-items: center;
  justify-content: center;
  height: 50px;
  padding: ${({ theme }) => theme.space.big} 0;
`

export function DashboardPage() {
  const params = useParams();
  const { data, loading, error } = useCurrencies(params.search);
  const navigate = useNavigate();
  const handleSearchChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    e?.target?.value ? navigate(`/dashboard/${e.target.value}`) : navigate(`/dashboard`)
  }, [navigate])

  return (
    <GePage
      header={
        <GeFlex>
          <Input
            placeholder="Search by currency name..."
            type="text"
            value={params.search}
            onChange={handleSearchChange}
          />
        </GeFlex>
      }>
    {loading && <GeLoader>Loading...</GeLoader>}
    {error && <GeErrorMessage>Something went wrong!</GeErrorMessage>}
    {!loading && !error && data?.length === 0 && (
      <GeListMessage>No data</GeListMessage>
    )}
    {!loading && (
      <GeList>
        {data?.map(({ currency, nameI18N, exchangeRate }: Currency) =>
          <CurrencyRow
            key={currency}
            currency={currency}
            nameI18N={nameI18N}
            exchangeRate={exchangeRate}
          />
        )}
      </GeList>
    )}
    </GePage>
  )
}
